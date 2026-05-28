(function () {
  const COMPANIES = {
    hulec: {
      logoMark: 'HULEC',
      nameEn: 'HULEC',
      nameKo: '휴렉',
      category: '측정분석',
      ceo: '대표이사',
      address: '경기도 안양시 만안구 예술공원로 153-32',
      homepage: 'www.hulec.co.kr',
      homepageUrl: 'https://www.hulec.co.kr',
      founded: '2015',
      employees: '50명',
      phone: '031-463-3505',
      sales: '5,000,000,000원',
      tags: ['휴렉', '음식물처리기', '가정용음식물처리기', '싱크대일체형'],
      introLeft:
        '휴렉은 2015년 법인 설립 이래 음식물처리기를 지속적으로 연구개발·생산하며, 상업용 시설과 가정용 시장에 맞춘 친환경 주방 솔루션을 제공하고 있습니다.',
      introRight:
        '음식물 쓰레기 발생량 절감과 처리 비용 절감을 목표로 싱크대 일체형 음식물처리기, 분쇄형 처리기 등 다양한 라인업을 선보이며 국내외 유통망을 확대하고 있습니다.',
      exhibitLeft:
        '주방 및 급식 시설용 음식물처리기, 가정용 분쇄형·건조형 음식물처리기 등 ENVEX 2026 출품 제품군을 소개합니다.',
      exhibitRight:
        '설치 공간과 처리 용량에 따른 맞춤 컨설팅, A/S 네트워크를 통해 현장 운영 효율을 높이는 통합 솔루션을 제공합니다.',
      products: [
        {
          title: '싱크대 일체형 음식물처리기',
          desc: '[주방] 싱크 하부에 설치하는 일체형 음식물처리기로, 음식물 쓰레기를 현장에서 분쇄·탈수 처리하여 배출 부담을 줄입니다.',
          image: '../img/sample/sample1.jpg',
        },
        {
          title: '가정용 분쇄형 처리기',
          desc: '가정용 소형 분쇄형 음식물처리기로, 소음과 냄새를 최소화한 설계로 일상 속 음식물 쓰레기를 간편하게 처리합니다.',
          image: '../img/sample/sample2.jpg',
        },
        {
          title: '상업용 대용량 처리기',
          desc: '학교·급식 시설 등 대용량 발생 현장을 위한 상업용 음식물처리 시스템으로, 처리량과 위생 기준에 맞춘 모델을 제공합니다.',
          image: '../img/sample/sample3.jpg',
        },
        {
          title: '탈수·건조 모듈',
          desc: '분쇄 후 탈수·건조 공정을 연계하는 모듈형 시스템으로, 후속 처리 비용 절감과 운영 효율 향상에 기여합니다.',
          image: '../img/sample/sample4.jpg',
        },
      ],
      related: [
        { name: 'LaserGas iQ2 Mk II', company: '휴렉', image: '../img/sample/sample5.jpg' },
        { name: 'DGA-X', company: '휴렉', image: '../img/sample/sample6.jpg' },
        { name: 'Sievers InnovOx TOC분석기', company: '휴렉', image: '../img/sample/sample7.jpg' },
        { name: 'UA50-tVOC', company: '휴렉', image: '../img/sample/sample8.jpg' },
        { name: '스마트 주방 모니터', company: '휴렉', image: '../img/sample/sample9.jpg' },
      ],
    },
    smartcara: {
      logoMark: 'SMART<br>CARA',
      nameEn: 'SMARTCARA CO.,LTD.',
      nameKo: '(주) 스마트카라',
      category: '측정분석',
      ceo: '대표이사',
      address: '서울특별시 강남구 테헤란로 000',
      homepage: 'www.smartcara.com',
      homepageUrl: 'https://www.smartcara.com',
      founded: '2010',
      employees: '120명',
      phone: '02-000-0000',
      sales: '30,000,000,000원',
      tags: ['음식물처리기', 'SMARTCARA', '주방가전'],
      introLeft:
        '스마트카라는 음식물처리기 전문 브랜드로, 일상 속 음식물 쓰레기를 줄이는 주방 가전 솔루션을 연구·개발합니다.',
      introRight:
        '가정용부터 상업용까지 다양한 라인업을 통해 사용자 편의성과 위생성을 동시에 만족시키는 제품을 선보입니다.',
      exhibitLeft: '음식물처리기, 건조형·분쇄형 시리즈 등 2026 ENVEX 출품 제품을 소개합니다.',
      exhibitRight: '스마트 IoT 연동 모델을 통해 사용 패턴 분석 및 유지관리 효율을 높입니다.',
      products: [
        { title: '스마트카라 PRO', desc: '고효율 음식물 건조·분쇄 일체형 주방 가전.', image: '../img/sample/sample4.jpg' },
        { title: '스마트카라 미니', desc: '1~2인 가구용 컴팩트 음식물처리기.', image: '../img/sample/sample5.jpg' },
        { title: '스마트카라 키친', desc: '상업용 주방 맞춤 대용량 모델.', image: '../img/sample/sample6.jpg' },
        { title: '필터·소모품 키트', desc: '정기 교체용 필터 및 유지보수 키트.', image: '../img/sample/sample7.jpg' },
      ],
      related: [
        { name: 'PRO 시리즈', company: '스마트카라', image: '../img/sample/sample8.jpg' },
        { name: '미니 시리즈', company: '스마트카라', image: '../img/sample/sample9.jpg' },
        { name: '키친 라인', company: '스마트카라', image: '../img/sample/sample10.jpg' },
        { name: 'IoT 모듈', company: '스마트카라', image: '../img/sample/sample11.jpg' },
        { name: '필터 키트', company: '스마트카라', image: '../img/sample/sample12.jpg' },
      ],
    },
    hani: {
      logoMark: 'hani',
      nameEn: 'hani network engineering',
      nameKo: '한니트웍엔지니어링',
      category: '수질',
      ceo: '대표이사',
      address: '경기도 성남시 분당구 000',
      homepage: 'www.hani-net.co.kr',
      homepageUrl: '#',
      founded: '1991',
      employees: '80명',
      phone: '031-000-0000',
      sales: '15,000,000,000원',
      tags: ['상수도 정화장비', '유속측정기', '분석시스템'],
      introLeft:
        '한니트웍엔지니어링은 1991년 설립 이후 수처리·정화설비 및 분석 장비를 전문 공급하며 고객 맞춤형 엔지니어링을 지원합니다.',
      introRight:
        '상수도·하수도 분야의 측정·제어 솔루션을 통해 수질 관리 효율 향상에 기여하고 있습니다.',
      exhibitLeft: '유속측정기, 수질 분석 시스템, 정화설비 부품 등을 출품합니다.',
      exhibitRight: '현장 설치부터 유지보수까지 원스톱 기술 지원을 제공합니다.',
      products: [
        { title: '유속측정기', desc: '관로·수로 유량 실시간 측정 장비.', image: '../img/sample/sample7.jpg' },
        { title: '수질분석 시스템', desc: '정밀 수질 항목 분석 솔루션.', image: '../img/sample/sample8.jpg' },
        { title: '정화설비 모듈', desc: '정수·하수 처리 공정용 모듈.', image: '../img/sample/sample9.jpg' },
        { title: '데이터 로거', desc: '현장 계측 데이터 수집 장치.', image: '../img/sample/sample10.jpg' },
      ],
      related: [
        { name: '유속계 A형', company: '한니', image: '../img/sample/sample11.jpg' },
        { name: '분석기 B형', company: '한니', image: '../img/sample/sample12.jpg' },
        { name: '제어판 C형', company: '한니', image: '../img/sample/sample13.jpg' },
        { name: '센서 D형', company: '한니', image: '../img/sample/sample1.jpg' },
        { name: '로거 E형', company: '한니', image: '../img/sample/sample2.jpg' },
      ],
    },
    wonkwang: {
      logoMark: 'Won<br>Kwang',
      nameEn: 'Won Kwang S&T Co.,Ltd',
      nameKo: '(주)원광에스앤티',
      category: '대기',
      ceo: '대표이사',
      address: '경기도 시흥시 000',
      homepage: 'www.wonkwang-st.com',
      homepageUrl: '#',
      founded: '2000',
      employees: '65명',
      phone: '031-000-0000',
      sales: '20,000,000,000원',
      tags: ['약품주입', '배관', '방지시설', '집진'],
      introLeft:
        '원광에스앤티는 대기환경 방지시설 인·허가, 구조물 신설·보강, 환경 평가 검사, 제어 솔루션을 제공합니다.',
      introRight:
        '현장 맞춤 설계와 시공·유지관리를 통해 대기오염 저감 목표 달성을 지원합니다.',
      exhibitLeft: '방지시설 제어 패널, 약품 주입 시스템, 집진 설비 부품을 소개합니다.',
      exhibitRight: '환경 규제 대응 컨설팅과 통합 모니터링 서비스를 함께 제공합니다.',
      products: [
        { title: '방지시설 제어', desc: '대기 방지시설 자동 제어 시스템.', image: '../img/sample/sample10.jpg' },
        { title: '약품주입 장치', desc: '탈황·탈질 약품 정밀 주입 장치.', image: '../img/sample/sample11.jpg' },
        { title: '집진 필터', desc: '고효율 집진 필터 모듈.', image: '../img/sample/sample12.jpg' },
        { title: '배관 시스템', desc: '현장 맞춤 배관·덕트 공사.', image: '../img/sample/sample13.jpg' },
      ],
      related: [
        { name: '제어패널', company: '원광에스앤티', image: '../img/sample/sample1.jpg' },
        { name: '주입펌프', company: '원광에스앤티', image: '../img/sample/sample2.jpg' },
        { name: '집진모듈', company: '원광에스앤티', image: '../img/sample/sample3.jpg' },
        { name: '배관키트', company: '원광에스앤티', image: '../img/sample/sample4.jpg' },
        { name: '모니터링', company: '원광에스앤티', image: '../img/sample/sample5.jpg' },
      ],
    },
    microone: {
      logoMark: 'MICRO<br>ONE',
      nameEn: 'MICRO-ONE Co.,Ltd',
      nameKo: '(주)마이크로원',
      category: '수질',
      ceo: '대표이사',
      address: '경기도 화성시 000',
      homepage: 'www.micro-one.co.kr',
      homepageUrl: '#',
      founded: '2006',
      employees: '90명',
      phone: '031-000-0000',
      sales: '18,000,000,000원',
      tags: ['수처리필터', '흡착', '정밀필터', '분리막'],
      introLeft:
        '(주)마이크로원은 2006년 창립 이후 친환경 필터와 흡착 소재를 중심으로 분리막 솔루션을 제공합니다.',
      introRight:
        '수처리·공정수 분야의 정밀 여과 기술로 산업 현장의 수질 관리 효율을 높입니다.',
      exhibitLeft: '정밀 필터, 흡착 소재, 분리막 모듈을 출품합니다.',
      exhibitRight: '맞춤 여과 공정 설계 및 필터 교체 주기 컨설팅을 지원합니다.',
      products: [
        { title: '정밀필터', desc: 'μm 단위 정밀 여과 필터.', image: '../img/sample/sample1.jpg' },
        { title: '흡착탑', desc: '중금속·유기물 흡착 처리 장치.', image: '../img/sample/sample2.jpg' },
        { title: '분리막 모듈', desc: 'RO·UF 분리막 시스템.', image: '../img/sample/sample3.jpg' },
        { title: '필터 하우징', desc: '산업용 필터 하우징.', image: '../img/sample/sample4.jpg' },
      ],
      related: [
        { name: 'PF-100', company: '마이크로원', image: '../img/sample/sample5.jpg' },
        { name: 'AD-200', company: '마이크로원', image: '../img/sample/sample6.jpg' },
        { name: 'MB-300', company: '마이크로원', image: '../img/sample/sample7.jpg' },
        { name: 'FH-400', company: '마이크로원', image: '../img/sample/sample8.jpg' },
        { name: 'KIT-500', company: '마이크로원', image: '../img/sample/sample9.jpg' },
      ],
    },
    aerzen: {
      logoMark: 'AERZEN',
      nameEn: 'AERZEN KOREA LTD',
      nameKo: '아르젠코리아 유한회사',
      category: '대기',
      ceo: '대표이사',
      address: '경기도 평택시 000',
      homepage: 'www.aerzen.com',
      homepageUrl: 'https://www.aerzen.com',
      founded: '1995',
      employees: '200명',
      phone: '031-000-0000',
      sales: '80,000,000,000원',
      tags: ['블로워', '스크류컴프레서', '소형콤프', '감속기'],
      introLeft:
        '아르젠코리아는 독일 Aerzener Maschinenfabrik의 공식 파트너로 고효율 블로워·압축기 솔루션을 제공합니다.',
      introRight:
        '수처리·대기·발전 등 다양한 산업 분야에 에너지 효율이 높은 송풍·압축 장비를 공급합니다.',
      exhibitLeft: '로터리 롭 블로워, 스크류 컴프레서, 소형 콤프레서 라인업을 소개합니다.',
      exhibitRight: '설치·시운전·A/S까지 글로벌 기술 지원 네트워크를 활용합니다.',
      products: [
        { title: '로터리 롭 블로워', desc: '고효율 송풍 장비.', image: '../img/sample/sample4.jpg' },
        { title: '스크류 컴프레서', desc: '산업용 스크류 압축기.', image: '../img/sample/sample5.jpg' },
        { title: '소형 콤프레서', desc: '컴팩트 압축 솔루션.', image: '../img/sample/sample6.jpg' },
        { title: '감속기 유닛', desc: '블로워 연동 감속기.', image: '../img/sample/sample7.jpg' },
      ],
      related: [
        { name: 'GM系列', company: 'AERZEN', image: '../img/sample/sample8.jpg' },
        { name: 'ZS系列', company: 'AERZEN', image: '../img/sample/sample9.jpg' },
        { name: 'Delta Blower', company: 'AERZEN', image: '../img/sample/sample10.jpg' },
        { name: 'Compressor', company: 'AERZEN', image: '../img/sample/sample11.jpg' },
        { name: 'Service Kit', company: 'AERZEN', image: '../img/sample/sample12.jpg' },
      ],
    },
  };

  const params = new URLSearchParams(window.location.search);
  const companyId = params.get('id') || 'hulec';
  const company = COMPANIES[companyId] || COMPANIES.hulec;

  const langButtons = document.querySelectorAll('.online-lang');
  const thumbsRoot = document.querySelector('.online2-thumbs');
  const progressBar = document.querySelector('.online2-thumb-progress-bar');
  const productMain = document.querySelector('.online2-product-main');
  const productTitle = document.querySelector('.online2-product-title');
  const productDesc = document.querySelector('.online2-product-desc');
  const logoMark = document.querySelector('.online2-logo-mark');

  function setField(selector, value) {
    const el = document.querySelector('[data-field="' + selector + '"]');
    if (!el || value == null) {
      return;
    }
    if (el.tagName === 'A' && selector === 'homepage') {
      el.textContent = value;
      const url = company.homepageUrl || '#';
      el.setAttribute('href', url);
      return;
    }
    el.textContent = value;
  }

  function renderTags(tags) {
    const root = document.querySelector('[data-field="tags"]');
    if (!root || !tags) {
      return;
    }
    root.innerHTML = '';
    tags.forEach(function (tag) {
      const span = document.createElement('span');
      span.textContent = tag;
      root.appendChild(span);
    });
  }

  function renderRelated(items) {
    const root = document.querySelector('[data-field="related"]');
    if (!root || !items) {
      return;
    }
    root.innerHTML = '';
    items.forEach(function (item) {
      const card = document.createElement('a');
      card.href = '#';
      card.className = 'online2-related-card';
      card.innerHTML =
        '<div class="online2-related-img"><img src="' +
        item.image +
        '" alt=""></div>' +
        '<p class="online2-related-name">' +
        item.name +
        '</p>' +
        '<p class="online2-related-company">' +
        item.company +
        '</p>';
      root.appendChild(card);
    });
  }

  function selectProduct(index) {
    const products = company.products;
    if (!products || !products[index]) {
      return;
    }
    const p = products[index];
    if (productMain) {
      productMain.src = p.image;
      productMain.alt = p.title;
    }
    if (productTitle) {
      productTitle.textContent = p.title;
    }
    if (productDesc) {
      productDesc.textContent = p.desc;
    }
    if (thumbsRoot) {
      thumbsRoot.querySelectorAll('.online2-thumb').forEach(function (btn, i) {
        btn.classList.toggle('is-active', i === index);
        btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });
    }
    if (progressBar && products.length) {
      const segment = 100 / products.length;
      progressBar.style.width = segment + '%';
      progressBar.style.marginLeft = segment * index + '%';
    }
  }

  function renderThumbs(products, initialIndex) {
    if (!thumbsRoot || !products) {
      return;
    }
    const start = Math.min(Math.max(initialIndex || 0, 0), products.length - 1);
    thumbsRoot.innerHTML = '';
    products.forEach(function (p, index) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'online2-thumb' + (index === start ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', index === start ? 'true' : 'false');
      btn.setAttribute('aria-label', p.title);
      btn.innerHTML = '<img src="' + p.image + '" alt="">';
      btn.addEventListener('click', function () {
        selectProduct(index);
      });
      thumbsRoot.appendChild(btn);
    });
    selectProduct(start);
  }

  function renderCompany() {
    document.title = company.nameKo + ' | 온라인 전시관 | ENVEX 2026';

    if (logoMark) {
      logoMark.innerHTML = company.logoMark || company.nameEn;
    }

    setField('nameEn', company.nameEn);
    setField('nameKo', company.nameKo);
    setField('category', company.category);
    setField('ceo', company.ceo);
    setField('address', company.address);
    setField('homepage', company.homepage);
    setField('founded', company.founded);
    setField('employees', company.employees);
    setField('phone', company.phone);
    setField('sales', company.sales);
    setField('introLeft', company.introLeft);
    setField('introRight', company.introRight);
    setField('exhibitLeft', company.exhibitLeft);
    setField('exhibitRight', company.exhibitRight);

    renderTags(company.tags);
    const productParam = parseInt(params.get('product'), 10);
    const productIndex = Number.isNaN(productParam) ? 0 : productParam;
    renderThumbs(company.products, productIndex);
    renderRelated(company.related);
  }

  if (langButtons.length > 0) {
    langButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        langButtons.forEach(function (item) {
          item.classList.remove('online-lang--active');
        });
        button.classList.add('online-lang--active');
      });
    });
  }

  document.querySelectorAll('.online2-page-num').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.online2-page-num').forEach(function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');
    });
  });

  renderCompany();
})();
