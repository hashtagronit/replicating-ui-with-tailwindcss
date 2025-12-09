"use client";
import Image from "next/image"
import { motion } from "motion/react"
import { cn } from "@/lib/utils";

export const LandingImages = ({ className }: {
    className?: string
}) => {
    return (
        <div className="relative min-h-140 w-full pt-20 perspective-distant overflow-x-clip">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="perspective-[4000px] translate-x-28">
                <Image src="https://assets.aceternity.com/screenshots/3.jpg"
                    alt="Demo1-image"
                    width={1920}
                    height={1080}
                    className={cn("rounded-lg mask-r-from-10% mask-b-from-50% shadow-2xl absolute inset-0 ", className)}
                    style={{
                        transform: "rotatey(20deg) rotatex(40deg) rotatez(-20deg)"
                    }} />
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="perspective-[4000px] translate-x-38 -translate-y-40">
                <Image src="https://assets.aceternity.com/screenshots/3.jpg"
                    alt="Demo1-image"
                    width={1920}
                    height={1080}
                    className={cn("rounded-lg mask-r-from-50% mask-b-from-80% shadow-2xl absolute inset-0 ", className)}
                    style={{
                        transform: "rotatey(20deg) rotatex(40deg) rotatez(-20deg)"
                    }} />
            </motion.div>
        </div>
    )
}

