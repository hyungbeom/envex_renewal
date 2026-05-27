(function () {
  'use strict';

  var faqItems = [
    {
      question: "'주최자 사무실'에서 하는 일은?",
      answer:
        '<p>ENVEX 주최자 사무실은 전시기간 동안 참가기업의 전시운영을 지원합니다.</p>' +
        '<p>전시장 내 전기, LAN 등 시설 지원, 전시장 비품 관리, 바이어 관리, 헬프데스크 운영 등의 업무를 수행합니다.</p>'
    },
    {
      question: '기본부스와 독립부스의 차이는?',
      answer:
        '<p>기본부스는 ENVEX 주최측에서 장치시공을 하며, 독립부스는 면적만 제공되므로 참가기업이 장치업체를 통하여 부스시공을 해야 합니다.</p>' +
        '<p>기본부스에는 조명, 상담데스크, 의자, 카펫 등이 기본 제공됩니다.</p>'
    },
    {
      question: '참가기업이 부스공사 외 별도로 준비해야 할 것은?',
      answer:
        '<p>전시품, 홍보 카탈로그 및 포스터, 영상 홍보용 PDP, 진열대, 부스내부 인테리어, 명함, 간단한 다과 등을 준비해야 합니다.</p>' +
        '<p>가구 등은 대여가 가능하며, 시설 훼손 시에는 원상복구가 필요합니다.</p>'
    },
    {
      question: '독립부스의 경우, 반드시 코엑스에 지정된 업체만 부스공사가 가능하나요?',
      answer:
        '<p>독립부스의 경우 코엑스 등록 협력업체를 통해 부스공사를 진행해야 합니다.</p>' +
        '<p><a href="../exhibitors/contact.html">코엑스 등록 협력업체 리스트 바로가기 →</a></p>'
    },
    {
      question: '전시 종료 후, 전시품 반출과 장치 철거 절차는?',
      answer:
        '<p>전시 종료 후 전시품 반출은 아래 절차에 따라 진행됩니다.</p>' +
        '<p class="faq-item__flow">반출신고서 작성 → 주최자확인(헬프데스크) → 보안요원 확인 → 전시품 반출</p>' +
        '<p>장치 철거 및 반출 일정은 주최자 안내에 따르며, 반출 신고 없이 전시품을 반출할 수 없습니다.</p>'
    },
    {
      question: '전시품 분실과 도난에 대비 방법은?',
      answer:
        '<p>전시기간 중 전시장 내 보안요원이 순찰하나, 귀중한 전시품은 참가기업에서 별도 관리·보관하시기 바랍니다.</p>' +
        '<p>전시품 분실·도난에 대한 보험 가입 및 관리는 참가기업의 책임이며, 주최자는 분실·도난에 대해 책임지지 않습니다.</p>'
    },
    {
      question: '부스칸막이 한 쪽을 막을 수 없나요? 뗄 수 없나요?',
      answer:
        '<p>부스 칸막은 구조적으로 고정되어 있어 한쪽을 막거나 분리할 수 없습니다.</p>' +
        '<p>부스 배치 및 칸막 관련 문의는 주최자 사무실로 연락해 주시기 바랍니다. (문의 : 02-3407-1540~3)</p>'
    },
    {
      question: '참가 기업별 기본 공급 전기는 없나요?',
      answer:
        '<p>기본 공급 전기는 없습니다. 기본부스의 경우 기본적으로 조명용 전기가 제공됩니다.</p>' +
        '<p>노트북, TV 등 전기제품을 사용하시는 경우에는 사전에 별도로 추가 신청하셔야 합니다.</p>' +
        '<p>신청방법 : ENVEX 공식홈페이지 (www.envex.or.kr) - 로그인 - 상단 메뉴바 참가기업 클릭 - 부대시설신청에서 작성하여 저장하면 됩니다. 온라인으로만 신청 가능합니다.</p>'
    },
    {
      question: '전기/급배수/인터넷 등은 언제부터 공급하나요?',
      answer:
        '<p>통상적으로 장치공사 마지막 날 오후 3시 이후에 공급이 시작됩니다.</p>' +
        '<p>특히 전기의 경우 안전관리를 위해 참가기업들의 내부 전기공사가 종료되어야 전기를 공급합니다. 1개의 참가기업이라도 전기 관련 공사가 완료되지 않으면 전기 공급이 불가하며, 이 경우 공급시간이 지연될 수 있습니다.</p>' +
        '<p>모든 업체들은 예정된 시간에 전기가 공급될 수 있도록 부스 내 전기공사를 신속히 완료할 수 있도록 협조 바랍니다.</p>' +
        '<p>참고로 급배수 이용 시 T자 이음관을 사용할 수 없으며, 인터넷은 유선 LAN 신청 기업에 제공합니다. 코엑스 내 무료 와이파이는 인터넷 검색 등 기초적인 서비스만을 제공해 업무용으로는 권장하지 않습니다.</p>'
    },
    {
      question: '참가비 납부에 대한 세금계산서는 언제 발행되나요?',
      answer:
        '<p>참가신청 완료 후 2주 이내 주최자는 계약금 납부 인보이스를 발행하고, 입금이 확인되면 계약금에 대한 세금계산서를 발부합니다. 또한 잔금 납입 일시 1주일 전에 잔금에 대한 인보이스를 발행하며, 입금이 확인되면 잔금에 대한 세금계산서를 발부합니다.</p>' +
        '<p>참가비 입금을 위해서 사전에 세금계산서가 필요할 경우에는 참가기업 지원 담당자에게 별도 연락이 필요합니다. 신청 시 제출한 사업자등록증 상에 변경사항이 발생할 경우에는 반드시 담당자에게 통보하여 세금계산서 발행에 차질이 없도록 협조해 주시기 바랍니다.</p>' +
        '<p>(문의 : 국제협력·전시사업팀 02-3407-1540~3)</p>'
    }
  ];

  function renderFaqList() {
    var list = document.querySelector('[data-faq-list]');
    if (!list) return;

    faqItems.forEach(function (item, index) {
      var article = document.createElement('article');
      article.className = 'faq-item';
      article.setAttribute('data-faq-item', String(index));

      var trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'faq-item__trigger';
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-controls', 'faq-panel-' + index);
      trigger.id = 'faq-trigger-' + index;

      var question = document.createElement('span');
      question.className = 'faq-item__question';
      question.textContent = item.question;

      var icon = document.createElement('span');
      icon.className = 'faq-item__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '+';

      trigger.appendChild(question);
      trigger.appendChild(icon);

      var panel = document.createElement('div');
      panel.className = 'faq-item__panel';
      panel.id = 'faq-panel-' + index;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', 'faq-trigger-' + index);
      panel.hidden = true;

      var answer = document.createElement('div');
      answer.className = 'faq-item__answer';
      answer.innerHTML = item.answer;

      panel.appendChild(answer);
      article.appendChild(trigger);
      article.appendChild(panel);
      list.appendChild(article);

      trigger.addEventListener('click', function () {
        var isOpen = article.classList.contains('is-open');
        closeAll();
        if (!isOpen) {
          openItem(article, trigger, panel, icon);
        }
      });
    });
  }

  function openItem(article, trigger, panel, icon) {
    article.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    icon.textContent = '−';
  }

  function closeAll() {
    document.querySelectorAll('.faq-item').forEach(function (article) {
      var trigger = article.querySelector('.faq-item__trigger');
      var panel = article.querySelector('.faq-item__panel');
      var icon = article.querySelector('.faq-item__icon');
      article.classList.remove('is-open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
      if (panel) panel.hidden = true;
      if (icon) icon.textContent = '+';
    });
  }

  renderFaqList();

  var scrollBtn = document.querySelector('[data-scroll-top]');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
