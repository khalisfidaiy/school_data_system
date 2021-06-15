import dbConnect from '../../../../utils/dbConnect';
import Authorisation from '../../../../models/SetAuthorisation';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try {
                const authorise = await Authorisation.find({});

                res.status(200).json({ success: true, data: authorise });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const authorise = await Authorisation.create(req.body);
                console.log(req.body);

                res.status(201).json({ success: true, data: authorise });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}