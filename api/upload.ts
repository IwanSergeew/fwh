import type { VercelRequest, VercelResponse } from '@vercel/node';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

export default function handler(req: VercelRequest, res: VercelResponse) {
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
        res.status(200).json({
          success: false,
          error: err.message,
        });
        res.end();
      });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
    res.end();
  }
}
