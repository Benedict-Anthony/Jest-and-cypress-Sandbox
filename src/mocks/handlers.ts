import { rest } from "msw";

export const handlers = [
    rest.get("http://jsonplacehold er.typicode.com/users", (req, res,ctx) => {
        return res(ctx.status(200), ctx.json([{id:1, name:"Benedict"}]))
    })
]