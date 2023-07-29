import express, { Request, Response, NextFunction } from 'express';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/', express.static('public'));

app.post('/upload', (req: Request, res: Response, _next: NextFunction) => {
  try {
    const options = {
      host: process.env.API_HOST,
      port: Number(process.env.API_PORT),
      method: 'post',
      path: process.env.API_PATH,
      headers: req.headers,
    };

    req
      .pipe(
        http.request(options, (destinationResponse) => {
          destinationResponse.pipe(res);
        }),
      )
      .on('error', (err) => {
        res.json({
          success: false,
          error: err.message,
        });
        res.end();
      });
  } catch (e) {
    res.json({
      success: false,
      error: e.message,
    });
    res.end();
  }
});

// Any other route throw error
app.get('*', () => {
  throw new Error('Invalid uri');
});
app.post('*', () => {
  throw new Error('Invalid uri');
});

// On error
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(400).json({
    success: false,
    error: err.message,
    data: null,
  });
  res.end();
});

app.listen(4444, () => {
  console.log(`Listening to port ${4444}`);
});
