import dbConnect from '../../../../utils/dbConnect';
import Teacher from '../../../../models/Teacher';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const teacher = await Teacher.find({});

                res.status(200).json({ success: true, data: teacher });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const teacher = await Teacher.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: teacher });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}