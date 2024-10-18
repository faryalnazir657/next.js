
import Link from 'next/link'
import styles from "../service/service.module.css";



const ServicePage = () => {
  return (
    <div className= {styles.container}>
      <h1 className= {styles.header}>This is service page</h1>

    <ul className= {styles.list}>
      
      <li><Link href="/service/graphic-design">This is graphic designing page</Link></li>
      <li><Link href="/service/video-editing">This is video editing page</Link></li>
    </ul>
    </div>
  )
}

export default ServicePage
