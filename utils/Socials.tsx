import { Twitter, PicartoDotTv, Furaffinity, Telegram, KoFi, Instagram, Mixcloud, Gmail } from "@icons-pack/react-simple-icons";
import { ReactChild } from 'react'

type Social = {
  name: string,
  string: string
  icon: ReactChild
}
const Socials: Social[] = [
  { name: "Email", string: "mailto:puma@himbo.cat", icon: <Gmail /> },
  { name: "Twitter", string: "https://twitter.com/kusakidesu", icon: <Twitter /> },
  { name: "Picarto", string: "https://picarto.tv/kusaki", icon: <PicartoDotTv /> },
  { name: "FurAffinity", string: "https://furaffinity.com/user/ideekay03", icon: <Furaffinity /> },
  { name: "Ko-Fi", string: "https://ko-fi.com/kusakidesu", icon: <KoFi /> },
  { name: "Telegram", string: "https://t.me/kusakidesu", icon: <Telegram /> },
  { name: "Mixcloud", string: "https://mixcloud.com/djtakenofficial", icon: <Mixcloud /> },
  { name: "Instagram", string: "https://instagr.am/kusakidesu_", icon: <Instagram /> }
]
export default Socials
