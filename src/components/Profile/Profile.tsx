import style from './ProfileStyle.module.css'

const Profile = () => {
    return (
        <>
            <main className={style.main}>
                <div className='content'>
                    <div  className={style.containerImg}>
                        <img src='https://img1.fonwall.ru/o/dp/beach-coast-sand-word.jpeg?route=mid&h=750'></img>
                    </div>
                    <div>
                        <div>
                            ava
                        </div>
                        <div>
                            <div>Name</div>
                            <div></div>
                        </div>
                        <div>
                            my posts
                            <div>new post</div>
                            <div>post1</div>
                            <div>post2</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile