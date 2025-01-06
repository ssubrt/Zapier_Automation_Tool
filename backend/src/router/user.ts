import { Router } from "express";
import { authMiddleware } from "../middleware";
import { SignInSchema, SignUpSchema } from "../types";
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async(req, res) => {

    const body = req.body;
    const parseData = SignUpSchema.safeParse(body);

    if(!parseData.success){
        console.log(parseData.error)
         res.status(411).json({
            message: "Incorrect Inputs"
        });
        return;
    }

    const userExists = await prismaClient.user.findFirst({
        where:{
            email: parseData.data.username
        }
    });

    if(userExists){
         res.status(403).json({
            message:"USer already exists"
        }) 
        return;
    }

    await prismaClient.user.create({
        data:{
            email: parseData.data.username,
            password: parseData.data.password,
            name: parseData.data.name
        }
    })

    res.json({
        message:"Please verify your acocunt by checking your email"
    });
    return;
    
});

router.post("/signin", async (req, res) => {
   
    
    const body = req.body;
    const parseData = SignInSchema.safeParse(body);

    if(!parseData.success){
         res.status(411).json({
            message: "Incorrect Inputs"
        });
        return;
    }

    const user = await prismaClient.user.findFirst({
        where:{
            email: parseData.data.username,
            password: parseData.data.password
        }
    });

    if(!user){
        res.status(403).json({
            message: "Sorry credentials are incorrect"
        });
        return;
    }

    const token = jwt.sign({
        id:user.id
    },JWT_PASSWORD);
    
    res.json({
        token:token
    })

   
});

router.get("/", authMiddleware, async(req, res) => {
    //NOTE: fix the type
    //@ts-ignore
   const id = req.id;
   const user = await prismaClient.user.findFirst({
       where:{
           id
       },
       select:{
        name:true,
        email:true
       }
   });

   res.json({
    user
   });
   return;
});

export const userRouter = router;
