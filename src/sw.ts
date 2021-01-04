/**
Network First (Network Falling Back to Cache)
*/

const SRC_FILES_CACHE_NAME =  'src_files';
const DATA_FILES_CACHE_NAME =  'data_files';
const filesToCache = [
    '/',
    '/app.js',
    '/app.css',
];

self.addEventListener('install', async () => {
    console.log('install3');
    const cache = await caches.open(SRC_FILES_CACHE_NAME);
    cache.addAll(filesToCache);
});

function isApiCall(req:Request) {
    return req.url.indexOf("/api/") > 0;
}

async function getFromCache(req:Request) {
    const res = await caches.match(req);

    if (!res) {

        return getFromNetwork(req)
    }
    return res;
}


async function getFromNetwork(req:Request) {
    const cache = await caches.open(DATA_FILES_CACHE_NAME);

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (e) {}
}

self.addEventListener('fetch', async (e:any) => {
    const req = e.request;
    const res = isApiCall(req) ? getFromNetwork(req) : getFromCache(req);
    await e.respondWith(res);
});
