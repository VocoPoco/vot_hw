import cluster from 'cluster';
import os from 'os';
import { createServer } from 'http';
import app from './server';

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        cluster.fork();
    });
} else {
    const server = createServer(app);
    server.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}
