import Navbar from "@/app/component/Navigation/Navbar";
import { ExpandableCardDemo } from "@/app/component/section/card/ExpandableCardDemo";

export default function projects(){
  return (
<>
<div>
<Navbar/>
</div>
<div>
<h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
<ExpandableCardDemo/>
</div>
</>
  )
}