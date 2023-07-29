import formidable from 'formidable';
import IncomingForm from 'formidable/Formidable';
import { IncomingMessage } from 'http';

export default class Helper {
  static getFormXLSXFile = async (req: IncomingMessage, form: IncomingForm) => {
    return new Promise<formidable.File>((resolve, reject) => {
      form.parse(req, (err, _fields, files) => {
        if (err) {
          reject(err.message);
          return;
        }

        const xlsxFile = (files.xlsx as formidable.File[])?.shift();

        if (!xlsxFile) {
          reject('XLSX file not provided.');
          return;
        }

        resolve(xlsxFile);
      });
    }).catch((reason) => {
      throw new Error(reason);
    });
  };
}
