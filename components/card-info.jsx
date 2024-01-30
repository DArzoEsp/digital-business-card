export default function CardInfo() {
    return (
        <div className='card-info'>
            <p className='name'> David Arzola-Espero</p>
            <p className='job-title'>Robotic Cell Technican</p>
            <p className='email'>davidarzola80@gmail.com</p>
            <button className='email-button'><i className="fa-solid fa-envelope"></i>Email</button>
            <p className='about'>
                <h4 className='about-title'>About</h4>
                <p className='about-info'>I am currently a Robotics Cell Technican for Caterpillar Inc. I am ambitious and motivated to learn as much as I can about
                technology. I would like to develop an app that can impact people lives
                </p>
            </p>
            <p className='interest'>
                <h4 className='interest-title'>Interest</h4>
                <p className='interest-info'>
                    Making food, Music listener, Gamer, Movie watcher, Coffee,
                    Nature lover, Technology, Programming, DIY
                </p>
            </p>
        </div>
    )
}