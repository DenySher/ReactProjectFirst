import style from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileImg}>
                <img src='https://photogenica.ru/preview-DP.php?directZoom=RUdYM1RTT3AwWlBBOGxjckVaV2svaWIzQzh5Y2haa3FEdXZKc015S2tnNTlndTJ3ZENlWFBOU21YZGpzdktnZnVwV3VESnlFTTBTY0t0ekZ5ZGZKVUhpdUNzREczOGRYRTJYM1lRczVxL3Jjdi9CbmVpOVhrSGEwelppNmdrV0Z0ZUcxdVY3cGp5c1NBeFpkRTJHSlN3PT0=&hash=bf7c08f41f3a9f1b74b6bfb039e59d7063964cc3904cd72d8c771b1ceed9f6ee'></img>
            </div>
            <div className={style.myPosts}>
                <div className={style.avaAndData}>
                    <img src='https://avatarko.ru/img/kartinka/32/film_pirat_31050.jpg'></img>
                    <div className={style.peopleDate}>
                        <div>Jeck Sparrow</div>
                        <div>Jack data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo