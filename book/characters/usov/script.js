var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
    .addScene('tell1:울드렌 소프는 리프의 왕자이자 여왕 마라 소프의 동생이다.', 850)
    .addScene('tell1:황금기 시절  울드렌 소프는 암리타 프로젝트의 일원으로 엑소더스 그린의 선원이였다.', 850)
    .addScene('tell1:본명은 울드윈이였는데 엑소더스 그림이 소행성대를 지나가던 중 어둠을 맞이하게 되고', 850)
    .addScene('tell1:여행자의 반격에 의해 생성된 블랙홀에 엑소더스 그린의 탑승객 모두와 함께 빨려 들어간다.', 850)
    .addScene('tell1:블랙홀에서 깨어난 울드윈은 이름을 울드렌으로 바꾸었다.', 850)
    .addScene('tell1:신정론 전쟁 이후 마라가 여왕이 되었고 마라를 따라 지류를 떠나 다시 태양계로 돌아왔다.', 850)
    .addScene('tell1:소행성대의 험한 환경, 몰락자, 그리고 탈주자들 같은 위기에 처하면서도', 850)
    .addScene('tell1:마라와 각성자들의 왕국인 리프를 건립하는데 성공한 울드렌은 만인들한테 사랑 받는 인물이 되었다.', 850)
    .addScene('tell1:이후 여러 공을 세워서 각성자들한테 큰 존경을 받고 있었으나 울드렌은 이 존경이 자신의 공이 아니라', 850)
    .addScene('tell1:자신이 마라의 혈육이라는 점에서 나오는 걸 알고 있었다.', 850)
    .addScene('tell1:자신의 진정한 능력을 보여주기 위해 큰 업적을 세워야 했고 이에 울드렌은 자신의 친구 졸리온 틸과 모험을 떠난다.', 850)
    .addScene('tell1:울드렌과 졸리온은 전설로만 여겨지던 검은 정원을 찾아 화성을 찾았고 수 많은 벡스와 기갑단 전사들을 해치우며', 850)
    .addScene('tell1:왕들의 계곡에 위치한 검은 정원의 입구에 도착한다.', 850)
    .addScene('tell1:정원의 입구를 열기 위해 울드렌은 관문군주를 꾀어내 호전적인 기갑단들과 싸우게 만들었고', 850)
    .addScene('tell1:난장판이 벌어지는 동안 포탈을 통해 정원에 들어가는데 성공한다', 850)
    .addScene('tell1:울드렌과 졸리온은 정원의 이색적인 모습에 감명을 받았고 긴 시간 동안 정원을 탐험하게 된다.', 850)
    .addScene('tell1:기하학적인 디테일과 붉은 꽃들에 아름다움을 느낀 울드렌은 정원을', 850)
    .addScene('tell1:수호자들로 부터 지켜야된다는 생각을 갖게 되고 나중에 마라를 데려올 생각을 한다.', 850)
    .addScene('tell1:검은 심장, 꽃, 그리고 낙오된 군단병과의 만남을 이후로 울드렌은 정원의 꽃 한송이와 리프로 돌아간다', 850)
    .addScene('tell1:마라에게 돌아간 울드렌은 꽃을 주었고 마라는 이에 감탄한다.', 850)
    .addScene('tell1:하지만 단둘이 있을 때 마라는 울드렌이 자신의 충고를 무시하고 정원에 갔다는 것에 실망했다는 사실을 말한다.', 850)
    .addScene('tell1:이에 울드렌은 자신의 누나를 놀랍게 하지 못했다는 점에 엄청난 상처를 받는다.', 850)
    .addScene('tell1:첩보대장으로 살아가던 어느 날 울드렌은 몰락자들의 신호를 감지한다.', 850)
    .addScene('tell1:모든 몰락자 가문의 채널으로 전파되는 암호화된 통신을 뚫지 못한 울드렌은', 850)
    .addScene('tell1:몰락자들 사이에서 유례 없는 수준의 통신량을 본다.', 850)
    .addScene('tell1:이에 테키언들의 예지 능력으로 몰락자 가문들이 연합해 지구에 총공세를 가한다는 사실을 알아내고', 850)
    .addScene('tell1:리프의 수뇌부는 할 수 있는게 없다는 결론을 낸다.', 850)
    .addScene('tell1하지만 울드렌은 목성대에서 지구로 향하던 늑대의 가문이 소행성 대에', 850)
    .addScene('tell1:주둔하고 있다는 첩보를 받고 이를 토대로 세레스에 있던 늑대의 가문의 인원들을 학살한다.', 850)
    .addScene('tell1:이 기습으로 각성자들은 태양계에 본격적으로 모습을 들어냈고', 850)
    .addScene('tell1:늑대의 가문 잔당들과의 전쟁인 리프 전쟁을 시작하게 된다.', 850)