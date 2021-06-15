import dbConnect from '../../../../utils/dbConnect';
import Admin from '../../../../models/Admins';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const admin = await Admin.find({});

                res.status(200).json({ success: true, data: admin });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const admin = await Admin.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: admin });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}