import prisma from "../app/database.js";

const AuthMiddleware = async (req, res, next) => {
    const { token, username } = req.body;

    if (!token || !username) {
        return res.status(401).json({ message: "expected token not found / username not found" });
    }

    const auth = await prisma.user.findFirst({
        where: {
            username: username,
        },
        select: {
            session: true,
        },
    });
    if (token === auth.session) {
        next();
    } else if (token !== auth.session) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

export default AuthMiddleware;
