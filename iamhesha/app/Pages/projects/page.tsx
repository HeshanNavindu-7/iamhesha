import Navbar from "@/app/component/Navigation/Navbar";
import { ExpandableCardDemo } from "@/app/component/section/card/ExpandableCardDemo";
import Footer from "@/app/component/section/Footer/Footer";

export default function projects(){
  return (
<div className="flex min-h-screen flex-col items-center justify-between bg-black">
<div className="w-full flex justify-center mt-8">
<Navbar/>
</div>
<div>
<h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
<ExpandableCardDemo/>
</div>
<Footer/>
</div>
  )
}