import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="main">
        <section className="home" id="home">
          <div className="home__container container grid">
            <Image src="/assets/img/main.png" alt="" width={500} height={500} />
            <div className="home__data">
              <h1 className="home__title">반갑습니다!</h1>
              <h3> 3년차 프론트앤드 개발자, 안동규입니다.</h3>
              <p className="home__description">
                직관적인 유저 인터페이스 개발을 지향합니다. 클린 코드를 고민하고
                렌더링 퍼포먼스에 대한 관심이 많습니다. 사용자 친화적인 GUI를
                위하여 함께 고민하고 개선해 나가는 것을 좋아합니다.
              </p>
            </div>
          </div>
        </section>
        <section className="carrier section container">
          <div className="carrier__container grid">
            <div className="carrier__content">
              <Image
                src="/assets/img/pask.png"
                alt=""
                width={120}
                height={120}
                className="carrier__img"
              />
              <h3 className="carrier__title">PAS-K</h3>
              <p className="carrier__description">
                React, Typescript 기반, ADC 장비(PAS-K) SPA 개발. 핵심 기능인
                부하 분산 설정 페이지 개발 및 장비 설정을 위한 Health Check,
                SSL, 포트 등 여러 페이지 개발도 수행. react-hook-form, recoil,
                useQuery 등, 렌더링 최적화를 위하여 초기 프로젝트 구성 단계에서
                라이브러리 도입 검토 및 반영.
              </p>
            </div>
            <div className="carrier__content">
              <Image
                src="/assets/img/webfrontk.png"
                alt=""
                width={120}
                height={120}
                className="carrier__img"
              />
              <h3 className="carrier__title">Webfront-K</h3>
              <p className="carrier__description">
                React, 기반 방화벽 장비(Webfront-K) SPA 개발. SQL Injection,
                Cookie Protection, Buffer Overflow 등, 보안 정책 관련 페이지를
                개발 및 유지보수.
              </p>
            </div>
            <div className="carrier__content">
              <div className="carrier__img">SW</div>
              <h3 className="carrier__title">PAS-K 통합 관리</h3>
              <p className="carrier__description">
                React, Typescript 기반, ADC 장비(PAS-K) 통합 관리 SPA 개발. 각
                ADC 장비의 설정 백업/복원 페이지 개발. 사용자 인터페이스 개선,
                인터렉티브한 화면을 위한 애니메이션 반영.
              </p>
            </div>
          </div>
        </section>

        <section className="celebrate section container" id="celebrate">
          <div className="celebrate__container grid">
            <div className="celebrate__data">
              <h2 className="section__title celebrate__title"></h2>
              <p className="celebrate__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                quibusdam aliquam unde inventore vero distinctio suscipit
                laborum repellendus voluptatibus libero mollitia corrupti quis
                nostrum, error accusamus quaerat nobis doloremque. Dicta.
              </p>
            </div>

            <Image
              src="/assets/img/stack.jpg"
              alt=""
              width={450}
              height={450}
              className="celebrate__img"
            />
          </div>
        </section>

        <section className="gift section container" id="gift">
          <h2 className="section__title">Tech</h2>

          <div className="gift__container grid">
            <article className="gift__card">
              <Image
                src="/assets/img/stack.png"
                alt=""
                width={100}
                height={100}
                className="gift__img"
              />
              <i className="bx bx-heart gift__icon"></i>

              <h3 className="gift__price">$15</h3>
              <span className="gift__title">Gingerbread</span>
            </article>
            <article className="gift__card">
              <Image
                width={100}
                height={100}
                src="/assets/img/gift2.png"
                alt=""
                className="gift__img"
              />
              <i className="bx bx-heart gift__icon">test</i>

              <h3 className="gift__price">$22</h3>
              <span className="gift__title">Santa Cause Hat</span>
            </article>
            <article className="gift__card">
              <Image
                width={100}
                height={100}
                src="/assets/img/gift3.png"
                alt=""
                className="gift__img"
              />
              <i className="bx bx-heart gift__icon"></i>

              <h3 className="gift__price">$48</h3>
              <span className="gift__title">Christmas Tree</span>
            </article>
            <article className="gift__card">
              <Image
                width={100}
                height={100}
                src="/assets/img/gift4.png"
                alt=""
                className="gift__img"
              />
              <i className="bx bx-heart gift__icon"></i>

              <h3 className="gift__price">$35</h3>
              <span className="gift__title">Snowman</span>
            </article>
            <article className="gift__card">
              <Image
                width={100}
                height={100}
                src="/assets/img/gift5.png"
                alt=""
                className="gift__img"
              />
              <i className="bx bx-heart gift__icon"></i>

              <h3 className="gift__price">$12</h3>
              <span className="gift__title">Christmas Stick</span>
            </article>
          </div>
        </section>

        <section className="new section container" id="new">
          <h2 className="section__title">New Gift</h2>

          <div className="new__container">
            <div className="swiper new-swiper">
              <div className="swiper-wrapper wiper-wrapper-additional">
                <article className="new__card swiper-slide">
                  <div className="new__overlay"></div>

                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/new1.png"
                    alt=""
                    className="new__img"
                  />
                  <h3 className="new__preice">$95</h3>
                  <span className="new__title">Reindeer</span>

                  <button className="button new__button">
                    <i className="bx bx-heart new__icon"></i>
                  </button>
                </article>
                <article className="new__card swiper-slide">
                  <div className="new__overlay"></div>

                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/new2.png"
                    alt=""
                    className="new__img"
                  />
                  <h3 className="new__preice">$20</h3>
                  <span className="new__title">Snow Globe</span>

                  <button className="button new__button">
                    <i className="bx bx-heart new__icon"></i>
                  </button>
                </article>
                <article className="new__card swiper-slide">
                  <div className="new__overlay"></div>

                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/new3.png"
                    alt=""
                    className="new__img"
                  />
                  <h3 className="new__preice">$75</h3>
                  <span className="new__title">Sledge</span>

                  <button className="button new__button">
                    <i className="bx bx-heart new__icon"></i>
                  </button>
                </article>
                <article className="new__card swiper-slide">
                  <div className="new__overlay"></div>

                  <Image
                    width={150}
                    height={150}
                    src="/assets/img/new4.png"
                    alt=""
                    className="new__img"
                  />
                  <h3 className="new__preice">$15</h3>
                  <span className="new__title">Christmas Wreath</span>

                  <button className="button new__button">
                    <i className="bx bx-heart new__icon"></i>
                  </button>
                </article>
              </div>

              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section className="message section container">
          <div className="message__container grid">
            <form action="" className="message__form">
              <h2 className="message__title">Send Good</h2>
              <input
                type="email"
                placeholder="Write your message"
                className="message__input"
              />
              <button className="button message__button">Send Message</button>
            </form>

            <Image
              src="/assets/img/message.png"
              alt=""
              width={200}
              height={200}
              className="message__img"
            />
          </div>
        </section>
      </main>
    </>
  );
}
