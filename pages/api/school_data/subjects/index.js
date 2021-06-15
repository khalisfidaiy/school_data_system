import dbConnect from '../../../../utils/dbConnect';
import Subject from '../../../../models/Subject';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const subject = await Subject.find({});

                res.status(200).json({ success: true, data: subject });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const subject = await Subject.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: subject });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}