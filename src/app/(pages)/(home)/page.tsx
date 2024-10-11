import Detailing from "@/app/(mainsite)/components/homepage/Detailing/Detailing";
import DontStress from "@/app/(mainsite)/components/homepage/DontStress/DontStress";
import Expert from "@/app/(mainsite)/components/homepage/Expert/Expert";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import More from "@/app/(mainsite)/components/homepage/More/More";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";


export default function Home() {
  return (
    <>
      <Header />
      <Detailing />
      <Proven />
      <More />
      <Expert />
      <DontStress />
    </>
  )
}
