import upUrl from 'Images/beatItems/up.svg';
import downUrl from 'Images/beatItems/down.svg';
import leftUrl from 'Images/beatItems/left.svg';
import rightUrl from 'Images/beatItems/right.svg';

export const Directions = {
    right: 'right',
    down: 'down',
    left: 'left',
    up: 'up',
};

export const DirectionToImage = {
    [Directions.right]: rightUrl,
    [Directions.down]: downUrl,
    [Directions.left]: leftUrl,
    [Directions.up]: upUrl,
};

export const ColumnsOrder = [Directions.right, Directions.left, Directions.down, Directions.up];
