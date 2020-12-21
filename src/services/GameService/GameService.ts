
const colors:string[] = ["green", "blue", "yellow", "red", "pink"];
const song:any = {
  notes: [{
      string: 0, //index of string 0-4 - this will also define the color: index 0 corresponds to the color "green" in colors array
      at: 10000, //appears at the 10 second mark
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 1,
      at: 1000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: -1,
      at: 6000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 1,
      at: 2000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 1,
      at: 2500,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 2,
      at: 1500,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 2,
      at: 2000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 2,
      at: 3000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 2,
      at: 4000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 3,
      at: 1500,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    },
    {
      string: 4,
      at: 2000,
      visible:false,
      difference:null,
      accessible:true,
      failed:false,
      id:0
    }
  ]
  .sort((note1, note2) => note1.at - note2.at)
  .map((note,index)=>{
      note.visible=false;
      note.difference=null;
      note.accessible=true;
      note.failed=false;
      note.id=index;
      return note;
  })
};

class GameService {
  private ctx:any;
  private then:any;
  private canvas:any;
  private colors:any;
  private size:any;
  private entities:any;
  private interval:any;
  private finalLineHeight:any;
  private nbLines:any;
  private heightInMiliseconds:any;
  private latencyFailSafe:any;
  private songOffset:any;
  private correct:any;
  private errors:any;
  private missed:any;
  private requestId:any;
  private map:any;


  start(canvas:HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.then = Date.now();
    this.canvas = canvas;
    this.colors = colors;
    this.size = 20;
    this.entities = [];
    this.interval = 1000 / 60;
    this.finalLineHeight = this.size;
    this.nbLines = 5;
    this.heightInMiliseconds = 2000;
    this.latencyFailSafe = 70;
    this.songOffset = 5000; //Song shouldn't start right away, give the player 10 seconds to get ready before notes appear.
    this.requestId = undefined;

    this.entities = song.notes;


    this.errors = 0;
    this.correct = 0;
    this.missed = 0;
    //this.visibleNotes = [];
    this.map = {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false
    };
    this._start = Date.now();
    this.loop();
  }

  keydownHandler() {
    for (const prop in this.map) {
      if (this.map.hasOwnProperty(prop) && this.map[prop] !== false) {
        //key was pressed,
        const note = this.entities.find(note => note.visible && note.string + 1 == prop && note.accessible);

        //if no visibile note found 1 error
        if (note === undefined){ this.errors++; return; }

        //check to see if note exists on purple line
        else if (note.difference < (this.heightInMiliseconds * this.finalLineHeight / this.canvas.height)+this.latencyFailSafe){
          this.correct++;
        }
        else{
          this.errors++;
        };

        note.accessible = false;
      }
    }

  }

  draw() {
    let now = Date.now();
    let delta = now - this.then;
    //determine if it's the right time to draw
    if (delta > this.interval) {
      this.then = now - (delta % this.interval);
      //Clear rect before drawing
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const canvasWidth = this.canvas.width;
      const canvasHeight = this.canvas.height;
      const percentage = 100 / this.nbLines / 100;
      const offset = canvasWidth * .1;

      //DRAWING FIXED ENTITIES FIRST

      //not many fixed entities so no point in instancing them.
      //Also this way, they adapt to the canvas size easily even when the canvas is resized.

      //draw can lines
      this.ctx.save();
      this.ctx.lineWidth = "2";
      this.ctx.strokeStyle = "black";

      for (let i = 0; i < this.nbLines; i++) {
        const X = (canvasWidth * i * percentage) + offset;
        this.ctx.beginPath();
        this.ctx.moveTo(X, 0);
        this.ctx.lineTo(X, canvasHeight);
        this.ctx.stroke();
        this.ctx.closePath();
      }
      this.ctx.restore();
      //draw final line
      //drawn at the bottom of the canvas
      this.ctx.fillStyle = "purple";
      this.ctx.fillRect(0, this.canvas.height - this.finalLineHeight, this.canvas.width, this.finalLineHeight);
      this.ctx.fill();

      //TODO: DRAW FIXED SQUARES HERE
      //Was lazy ;)

      //DRAWING DYNAMIC ENTITIES SECOND

      const milisecondsSinceStart = now - this._start;
      this.entities = this.entities.filter(entity => {
        const difference = entity.at - milisecondsSinceStart;
        //Check to see if note should appear
        if (difference > 0 && difference < this.heightInMiliseconds) {

          entity.difference = difference;
          entity.visible = true;
          const width = entity.string !== -1 ? this.size : canvasWidth;
          const X = (entity.string !== -1) ? (canvasWidth * entity.string * percentage) + offset: 0;
          const H = canvasHeight - canvasHeight * (difference / this.heightInMiliseconds);
          this.ctx.fillStyle =(entity.string !== -1) ? this.colors[entity.string]: "orange";
          this.ctx.fillRect(X - (this.size / 2), H, width, this.size);
          this.ctx.fill();
          return true;
        } else if (difference <= -this.latencyFailSafe) {

          //Missed a note
          if(entity.failed === false && entity.accessible === true){
            this.missed++;
            this.errors++;
          }
          return false;
        } else {
          return true;
        }

      });
    }
  }

  loop() {
    if(this.entities.length === 0){ this.stop(); return; }
    this.requestId = requestAnimationFrame(this.loop.bind(this));
    this.draw();
  }

  stop(){
    cancelAnimationFrame(this.requestId);
    this.requestId = undefined;
    alert(`Game Completed: correct = ${this.correct}, errors = ${this.errors}, missed = ${this.missed}`);
  }

}

export const gameService = new GameService();
