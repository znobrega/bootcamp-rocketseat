<<<<<<< HEAD
=======
import File from '../models/File';

>>>>>>> c060d5a833580a53849930e4a6c27f6b37d583dd
class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    return res.json(file);
  }
}

export default new FileController();
