"use server"
import { db } from "@/lib/db";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { slug: string } }) {
    const info = await db.query.gift.findFirst({ where: ((gift, { eq }) => eq(gift.id, params.slug)),});
    console.log(info);
    if (!info) {
        return notFound();
    }

    return (
        <div>
            {info?.id}
            {info.msg}
        </div>
    )
    
}
