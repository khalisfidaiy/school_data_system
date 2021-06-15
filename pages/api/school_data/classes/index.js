import dbConnect from '../../../../utils/dbConnect';
import Classes from '../../../../models/Class';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const classes = await Classes.find({});

                res.status(200).json({ success: true, data: classes });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const classes = await Classes.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: classes });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}