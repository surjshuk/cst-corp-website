import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Cookie = () => {
    return (
        <div className="bg-black text-white p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
            <div className="w-1/2 space-y-4">
                <p className="text-xs">
                    We use cookies on <Link href="" className="text-primary">bramer.in</Link> to make your experience better—personalized content, smooth browsing, and added security. You can update your preferences anytime. Learn more in our <Link href="" className="text-primary">Privacy Policy</Link>.
                </p>
                <p className="text-xs">Ready to allow all cookies? Click “Yes, I agree.”</p>
            </div>
            <div className="flex gap-4 w-fit ml-auto">
                <Button className="bg-background text-black w-52">Cookie Settings</Button>
                <Button className="w-52">Yes, I agree</Button>
            </div>
        </div>
    )
}