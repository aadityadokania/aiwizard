// import {PrismaClient} from "@prisma/client";

// declare global {
//     var prisma : PrismaClient | undefined;
// };

// const prismadb = globalThis.prisma || new PrismaClient ();

// if(process.env.NODE_ENV !== "production") global.prisma = prismadb;

// export default prismadb;

import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;