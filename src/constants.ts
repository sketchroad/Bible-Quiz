import { Verse } from './types';

// 이 배열에 사용자가 보내주시는 성경 말씀과 문제들이 저장될 예정입니다.
export const DEFAULT_VERSES: Verse[] = [
  {
    id: '1',
    text: '태초에 하나님이 천지를 창조하시니라',
    reference: '창세기 1:1',
    questions: [
      { id: '1-ox', type: 'OX', questionText: '태초에 하나님이 천지를 형성하시니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '1-fb', type: 'FILL_BLANK', questionText: '태초에 하나님이 ( )를 창조하시니라.', options: ['인간', '만물', '천지', '세상'], correctAnswer: '천지' }
    ]
  },
  {
    id: '2',
    text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라',
    reference: '요한복음 3:16',
    questions: [
      { id: '2-ox', type: 'OX', questionText: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 구원을 얻게 하려 하심이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '2-fb', type: 'FILL_BLANK', questionText: '하나님이 세상을 이처럼 사랑하사 ( )를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.', options: ['성령', '말씀', '천사', '독생자'], correctAnswer: '독생자' }
    ]
  },
  {
    id: '3',
    text: '항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라',
    reference: '데살로니가전서 5:16-18',
    questions: [
      { id: '3-ox', type: 'OX', questionText: '항상 기뻐하라 쉬지 말고 기도하라 범사에 찬양하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '3-fb', type: 'FILL_BLANK', questionText: '항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 ( )이니라.', options: ['사랑', '계획', '뜻', '말씀'], correctAnswer: '뜻' }
    ]
  },
  {
    id: '4',
    text: '내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라',
    reference: '빌립보서 4:13',
    questions: [
      { id: '4-ox', type: 'OX', questionText: '내게 능력 주시는 자 안에서 내가 어떤 것을 할 수 있느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '4-fb', type: 'FILL_BLANK', questionText: '내게 ( ) 주시는 자 안에서 내가 모든 것을 할 수 있느니라.', options: ['지혜', '은혜', '능력', '평강'], correctAnswer: '능력' }
    ]
  },
  {
    id: '5',
    text: '여호와는 나의 목자시니 내게 부족함이 없으리로다',
    reference: '시편 23:1',
    questions: [
      { id: '5-ox', type: 'OX', questionText: '여호와는 나의 반석이시니 내게 부족함이 없으리로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '5-fb', type: 'FILL_BLANK', questionText: '여호와는 나의 목자시니 내게 ( )이 없으리로다.', options: ['고통', '두려움', '근심', '부족함'], correctAnswer: '부족함' }
    ]
  },
  {
    id: '6',
    text: '너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라',
    reference: '잠언 3:5',
    questions: [
      { id: '6-ox', type: 'OX', questionText: '너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '6-fb', type: 'FILL_BLANK', questionText: '너는 마음을 다하여 여호와를 ( )하고 네 명철을 의지하지 말라.', options: ['경외', '신뢰', '찬양', '사랑'], correctAnswer: '신뢰' }
    ]
  },
  {
    id: '7',
    text: '말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라',
    reference: '요한복음 1:14',
    questions: [
      { id: '7-ox', type: 'OX', questionText: '말씀이 육신이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 사랑과 진리가 충만하더라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '7-fb', type: 'FILL_BLANK', questionText: '말씀이 ( )이 되어 우리 가운데 거하시매 우리가 그의 영광을 보니 아버지의 독생자의 영광이요 은혜와 진리가 충만하더라.', options: ['빛', '영', '육신', '사람'], correctAnswer: '육신' }
    ]
  },
  {
    id: '8',
    text: '우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라',
    reference: '로마서 8:28',
    questions: [
      { id: '8-ox', type: 'OX', questionText: '우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '8-fb', type: 'FILL_BLANK', questionText: '우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 ( )하여 선을 이루느니라.', options: ['연합', '합력', '협력', '역사'], correctAnswer: '합력' }
    ]
  },
  {
    id: '9',
    text: '믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거니',
    reference: '히브리서 11:1',
    questions: [
      { id: '9-ox', type: 'OX', questionText: '믿음은 바라는 것들의 근거요 보이지 않는 것들의 증거니.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '9-fb', type: 'FILL_BLANK', questionText: '믿음은 바라는 것들의 실상이요 보이지 않는 것들의 ( )니.', options: ['소망', '확신', '증거', '표적'], correctAnswer: '증거' }
    ]
  },
  {
    id: '10',
    text: '너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라',
    reference: '요한복음 15:7',
    questions: [
      { id: '10-ox', type: 'OX', questionText: '너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 응답하리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '10-fb', type: 'FILL_BLANK', questionText: '너희가 내 안에 ( )하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라.', options: ['머물', '거', '살', '있'], correctAnswer: '거' }
    ]
  },
  {
    id: '11',
    text: '수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라',
    reference: '마태복음 11:28',
    questions: [
      { id: '11-ox', type: 'OX', questionText: '수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '11-fb', type: 'FILL_BLANK', questionText: '( )하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라.', options: ['고생', '수고', '노력', '힘든'], correctAnswer: '수고' }
    ]
  },
  {
    id: '12',
    text: '오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니 이같은 것을 금지할 법이 없느니라',
    reference: '갈라디아서 5:22-23',
    questions: [
      { id: '12-ox', type: 'OX', questionText: '오직 성령의 열매는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 겸손과 절제니 이같은 것을 금지할 법이 없느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '12-fb', type: 'FILL_BLANK', questionText: '오직 성령의 ( )는 사랑과 희락과 화평과 오래 참음과 자비와 양선과 충성과 온유와 절제니 이같은 것을 금지할 법이 없느니라.', options: ['은사', '역사', '능력', '열매'], correctAnswer: '열매' }
    ]
  },
  {
    id: '13',
    text: '사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 인도하시는 이는 여호와시니라',
    reference: '잠언 16:9',
    questions: [
      { id: '13-ox', type: 'OX', questionText: '사람이 마음으로 자기의 길을 결정할지라도 그의 걸음을 인도하시는 이는 여호와시니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '13-fb', type: 'FILL_BLANK', questionText: '사람이 마음으로 자기의 길을 계획할지라도 그의 걸음을 ( )하시는 이는 여호와시니라.', options: ['보호', '인도', '축복', '지키'], correctAnswer: '인도' }
    ]
  },
  {
    id: '14',
    text: '너의 행사를 여호와께 맡기라 그리하면 네가 경영하는 것이 이루어지리라',
    reference: '잠언 16:3',
    questions: [
      { id: '14-ox', type: 'OX', questionText: '너의 마음을 여호와께 맡기라 그리하면 네가 경영하는 것이 이루어지리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '14-fb', type: 'FILL_BLANK', questionText: '너의 행사를 여호와께 맡기라 그리하면 네가 ( )하는 것이 이루어지리라.', options: ['기도', '소망', '경영', '계획'], correctAnswer: '경영' }
    ]
  },
  {
    id: '15',
    text: '우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라',
    reference: '갈라디아서 6:9',
    questions: [
      { id: '15-ox', type: 'OX', questionText: '우리가 선을 행하되 낙심하지 말지니 포기하지 아니하면 때가 이르매 거두리라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '15-fb', type: 'FILL_BLANK', questionText: '우리가 선을 행하되 ( )하지 말지니 포기하지 아니하면 때가 이르매 거두리라.', options: ['두려워', '염려', '낙심', '걱정'], correctAnswer: '낙심' }
    ]
  },
  {
    id: '16',
    text: '아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라',
    reference: '빌립보서 4:6',
    questions: [
      { id: '16-ox', type: 'OX', questionText: '아무 것도 걱정하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '16-fb', type: 'FILL_BLANK', questionText: '아무 것도 염려하지 말고 다만 모든 일에 기도와 ( )로, 너희 구할 것을 감사함으로 하나님께 아뢰라.', options: ['찬양', '간구', '헌신', '예배'], correctAnswer: '간구' }
    ]
  },
  {
    id: '17',
    text: '너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요',
    reference: '마태복음 5:14',
    questions: [
      { id: '17-ox', type: 'OX', questionText: '너희는 세상의 소금이라 산 위에 있는 동네가 숨겨지지 못할 것이요.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '17-fb', type: 'FILL_BLANK', questionText: '너희는 세상의 빛이라 산 위에 있는 동네가 ( )지 못할 것이요.', options: ['사라지', '숨겨지', '없어지', '흔들리'], correctAnswer: '숨겨지' }
    ]
  },
  {
    id: '18',
    text: '요한이 또 증언하여 이르되 내가 보매 성령이 비둘기 같이 하늘로부터 내려와서 그의 위에 머물렀더라',
    reference: '요한복음 1:32',
    questions: [
      { id: '18-ox', type: 'OX', questionText: '요한이 또 증언하여 이르되 내가 보매 성령이 비둘기 같이 하늘로부터 내려와서 그의 위에 머물렀더라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '18-fb', type: 'FILL_BLANK', questionText: '요한이 또 증언하여 이르되 내가 보매 성령이 비둘기 같이 하늘로부터 내려와서 그의 위에 ( )더라.', options: ['임하였', '머물렀', '계셨', '나타났'], correctAnswer: '머물렀' }
    ]
  },
  {
    id: '19',
    text: '그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라',
    reference: '빌립보서 4:7',
    questions: [
      { id: '19-ox', type: 'OX', questionText: '그리하면 모든 지각에 뛰어난 하나님의 은혜가 그리스도 예수 안에서 너희 마음과 생각을 지키시리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '19-fb', type: 'FILL_BLANK', questionText: '그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 ( )을 지키시리라.', options: ['영혼', '생각', '삶', '믿음'], correctAnswer: '생각' }
    ]
  },
  {
    id: '20',
    text: '하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고',
    reference: '창세기 1:27',
    questions: [
      { id: '20-ox', type: 'OX', questionText: '하나님이 자기 형상 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '20-fb', type: 'FILL_BLANK', questionText: '하나님이 자기 ( ) 곧 하나님의 형상대로 사람을 창조하시되 남자와 여자를 창조하시고.', options: ['뜻', '방법', '형상', '말씀'], correctAnswer: '형상' }
    ]
  },
  {
    id: '21',
    text: '여호와는 나의 힘이요 노래시며 나의 구원이시로다 그는 나의 하나님이시니 내가 그를 찬송할 것이요 내 아버지의 하나님이시니 내가 그를 높이리로다',
    reference: '출애굽기 15:2',
    questions: [
      { id: '21-ox', type: 'OX', questionText: '여호와는 나의 힘이요 찬양이시며 나의 구원이시로다 그는 나의 하나님이시니 내가 그를 찬송할 것이요 내 아버지의 하나님이시니 내가 그를 높이리로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '21-fb', type: 'FILL_BLANK', questionText: '여호와는 나의 힘이요 노래시며 나의 ( )이시로다 그는 나의 하나님이시니 내가 그를 찬송할 것이요 내 아버지의 하나님이시니 내가 그를 높이리로다.', options: ['빛', '피난처', '구원', '반석'], correctAnswer: '구원' }
    ]
  },
  {
    id: '22',
    text: '말하여 이르기를 이스라엘아 들으라 너희가 오늘 너희의 대적과 싸우려고 가까이 나아왔으니 마음에 겁내지 말며 두려워하지 말며 떨지 말며 그들로 말미암아 놀라지 말라',
    reference: '신명기 20:3',
    questions: [
      { id: '22-ox', type: 'OX', questionText: '말하여 이르기를 이스라엘아 들으라 너희가 오늘 너희의 대적과 싸우려고 가까이 나아왔으니 마음에 겁내지 말며 두려워하지 말며 두근거리지 말며 그들로 말미암아 놀라지 말라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '22-fb', type: 'FILL_BLANK', questionText: '말하여 이르기를 이스라엘아 들으라 너희가 오늘 너희의 대적과 싸우려고 가까이 나아왔으니 마음에 겁내지 말며 두려워하지 말며 떨지 말며 그들로 말미암아 ( )지 말라.', options: ['두려워하', '물러서', '놀라', '흔들리'], correctAnswer: '놀라' }
    ]
  },
  {
    id: '23',
    text: '내가 네게 명령한 것이 아니냐 강하고 담대하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라',
    reference: '여호수아 1:9',
    questions: [
      { id: '23-ox', type: 'OX', questionText: '내가 네게 명령한 것이 아니냐 강하고 담대하라 두려워하지 말며 놀라지 말라 네가 무엇을 하든지 네 하나님 여호가 너와 함께 하느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '23-fb', type: 'FILL_BLANK', questionText: '내가 네게 명령한 것이 아니냐 강하고 ( )하라 두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라.', options: ['인내', '지혜', '담대', '온유'], correctAnswer: '담대' }
    ]
  },
  {
    id: '24',
    text: '내가 여호와를 항상 내 앞에 모심이여 그가 나의 오른쪽에 계시므로 내가 흔들리지 아니하리로다',
    reference: '시편 16:8',
    questions: [
      { id: '24-ox', type: 'OX', questionText: '내가 여호와를 늘 내 앞에 모심이여 그가 나의 오른쪽에 계시므로 내가 흔들리지 아니하리로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '24-fb', type: 'FILL_BLANK', questionText: '내가 여호와를 항상 내 앞에 모심이여 그가 나의 오른쪽에 계시므로 내가 ( )지 아니하리로다.', options: ['두려워하', '넘어지', '흔들리', '무너지'], correctAnswer: '흔들리' }
    ]
  },
  {
    id: '25',
    text: '여호와는 나의 반석이시요 나의 요새시요 나를 건지시는 이시요 나의 하나님이시요 내가 그 안에 피할 나의 바위시요 나의 방패시요 나의 구원의 뿔이시요 나의 산성이시로다',
    reference: '시편 18:2',
    questions: [
      { id: '25-ox', type: 'OX', questionText: '여호와는 나의 반석이시요 나의 요새시요 나를 건지시는 이시요 나의 하나님이시요 내가 그 안에 피할 나의 바위시요 나의 검이시요 나의 구원의 뿔이시요 나의 산성이시로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '25-fb', type: 'FILL_BLANK', questionText: '여호와는 나의 ( )이시요 나의 요새시요 나를 건지시는 이시요 나의 하나님이시요 내가 그 안에 피할 나의 바위시요 나의 방패시요 나의 구원의 뿔이시요 나의 산성이시로다.', options: ['빛', '능력', '반석', '피난처'], correctAnswer: '반석' }
    ]
  },
  {
    id: '26',
    text: '여호와여 멀리 하지 마옵소서 나의 힘이시여 속히 나를 도우소서',
    reference: '시편 22:19',
    questions: [
      { id: '26-ox', type: 'OX', questionText: '여호와여 멀리 하지 마옵소서 나의 구원이시여 속히 나를 도우소서.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '26-fb', type: 'FILL_BLANK', questionText: '여호와여 멀리 하지 마옵소서 나의 힘이시여 속히 나를 ( ).', options: ['지키소서', '구원하소서', '도우소서', '붙드소서'], correctAnswer: '도우소서' }
    ]
  },
  {
    id: '27',
    text: '내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다',
    reference: '시편 23:4',
    questions: [
      { id: '27-ox', type: 'OX', questionText: '내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '27-fb', type: 'FILL_BLANK', questionText: '내가 사망의 음침한 골짜기로 다닐지라도 해를 두려워하지 않을 것은 주께서 나와 ( ) 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다.', options: ['동행', '함께', '인도', '보호'], correctAnswer: '함께' }
    ]
  },
  {
    id: '28',
    text: '여호와여 주의 도를 내게 보이시고 주의 길을 내게 가르치소서',
    reference: '시편 25:4',
    questions: [
      { id: '28-ox', type: 'OX', questionText: '여호와여 주의 도를 내게 알리시고 주의 길을 내게 가르치소서.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '28-fb', type: 'FILL_BLANK', questionText: '여호와여 주의 도를 내게 보이시고 주의 ( )을 내게 가르치소서.', options: ['뜻', '말씀', '길', '진리'], correctAnswer: '길' }
    ]
  },
  {
    id: '29',
    text: '여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요 여호와는 내 생명의 능력이시니 내가 누구를 무서워하리요',
    reference: '시편 27:1',
    questions: [
      { id: '29-ox', type: 'OX', questionText: '여호와는 나의 빛이요 나의 구원이시니 내가 누구를 두려워하리요 여호와는 내 생명의 소망이시니 내가 누구를 무서워하리요.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '29-fb', type: 'FILL_BLANK', questionText: '여호와는 나의 ( )이요 나의 구원이시니 내가 누구를 두려워하리요 여호는 내 생명의 능력이시니 내가 누구를 무서워하리요.', options: ['반석', '힘', '빛', '피난처'], correctAnswer: '빛' }
    ]
  },
  {
    id: '30',
    text: '여호와께서 자기 백성에게 힘을 주심이여 여호와께서 자기 백성에게 평강의 복을 주시리로다',
    reference: '시편 29:11',
    questions: [
      { id: '30-ox', type: 'OX', questionText: '여호와께서 자기 백성에게 힘을 주심이여 여호와께서 자기 백성에게 은혜의 복을 주시리로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '30-fb', type: 'FILL_BLANK', questionText: '여호와께서 자기 백성에게 ( )을 주심이여 여호와께서 자기 백성에게 평강의 복을 주시리로다.', options: ['은혜', '지혜', '힘', '평안'], correctAnswer: '힘' }
    ]
  },
  {
    id: '31',
    text: '여호와는 마음이 상한 자를 가까이 하시고 충심으로 통회하는 자를 구원하시는도다',
    reference: '시편 34:18',
    questions: [
      { id: '31-ox', type: 'OX', questionText: '여호와는 마음이 겸손한 자를 가까이 하시고 충심으로 통회하는 자를 구원하시는도다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '31-fb', type: 'FILL_BLANK', questionText: '여호와는 마음이 상한 자를 가까이 하시고 충심으로 통회하는 자를 ( )하시는도다.', options: ['위로', '치유', '구원', '축복'], correctAnswer: '구원' }
    ]
  },
  {
    id: '32',
    text: '하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라',
    reference: '시편 46:1',
    questions: [
      { id: '32-ox', type: 'OX', questionText: '하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 위로이시라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '32-fb', type: 'FILL_BLANK', questionText: '하나님은 우리의 ( )시요 힘이시니 환난 중에 만날 큰 도움이시라.', options: ['반석', '방패', '피난처', '목자'], correctAnswer: '피난처' }
    ]
  },
  {
    id: '33',
    text: '내가 산을 향하여 눈을 들리라 나의 도움이 어디서 올까',
    reference: '시편 121:1',
    questions: [
      { id: '33-ox', type: 'OX', questionText: '내가 하늘을 향하여 눈을 들리라 나의 도움이 어디서 올까.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '33-fb', type: 'FILL_BLANK', questionText: '내가 산을 향하여 눈을 들리라 나의 ( )이 어디서 올까.', options: ['힘', '구원', '도움', '빛'], correctAnswer: '도움' }
    ]
  },
  {
    id: '34',
    text: '나의 도움은 천지를 지으신 여호와에게서로다',
    reference: '시편 121:2',
    questions: [
      { id: '34-ox', type: 'OX', questionText: '나의 도움은 천지를 지으신 하나님에게서로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '34-fb', type: 'FILL_BLANK', questionText: '나의 도움은 ( )를 지으신 여호와에게서로다.', options: ['만물', '세상', '천지', '생명'], correctAnswer: '천지' }
    ]
  },
  {
    id: '35',
    text: '여호와께서 너를 지켜 모든 환난을 면하게 하시며 또 네 영혼을 지키시리로다',
    reference: '시편 121:7',
    questions: [
      { id: '35-ox', type: 'OX', questionText: '여호와께서 너를 지켜 모든 환난을 피하게 하시며 또 네 영혼을 지키시리로다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '35-fb', type: 'FILL_BLANK', questionText: '여호와께서 너를 지켜 모든 환난을 면하게 하시며 또 네 ( )을 지키시리로다.', options: ['몸', '마음', '영혼', '삶'], correctAnswer: '영혼' }
    ]
  },
  {
    id: '36',
    text: '내가 환난 중에 다닐지라도 주께서 나를 살아나게 하시고 주의 손을 펴사 내 원수들의 분노를 막으시며 주의 오른손이 나를 구원하시리이다',
    reference: '시편 138:7',
    questions: [
      { id: '36-ox', type: 'OX', questionText: '내가 환난 중에 다닐지라도 주께서 나를 살아나게 하시고 주의 손을 펴사 내 원수들의 분노를 막으시며 주의 오른손이 나를 지키시리이다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '36-fb', type: 'FILL_BLANK', questionText: '내가 환난 중에 다닐지라도 주께서 나를 ( )게 하시고 주의 손을 펴사 내 원수들의 분노를 막으시며 주의 오른손이 나를 구원하시리이다.', options: ['이기나', '자유롭', '살아나', '강하'], correctAnswer: '살아나' }
    ]
  },
  {
    id: '37',
    text: '야곱의 하나님을 자기의 도움으로 삼으며 여호와 자기 하나님에게 자기의 소망을 두는 자는 복이 있도다',
    reference: '시편 146:5',
    questions: [
      { id: '37-ox', type: 'OX', questionText: '야곱의 하나님을 자기의 도움으로 삼으며 여호와 자기 하나님에게 자기의 믿음을 두는 자는 복이 있도다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '37-fb', type: 'FILL_BLANK', questionText: '야곱의 하나님을 자기의 ( )으로 삼으며 여호와 자기 하나님에게 자기의 소망을 두는 자는 복이 있도다.', options: ['피난처', '도움', '반석', '힘'], correctAnswer: '도움' }
    ]
  },
  {
    id: '38',
    text: '너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라',
    reference: '잠언 3:6',
    questions: [
      { id: '38-ox', type: 'OX', questionText: '너는 범사에 그를 인정하라 그리하면 네 길을 인도하시리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '38-fb', type: 'FILL_BLANK', questionText: '너는 ( )에 그를 인정하라 그리하면 네 길을 지도하시리라.', options: ['모든 일', '항상', '범사', '언제나'], correctAnswer: '범사' }
    ]
  },
  {
    id: '39',
    text: '여호와를 경외하는 것이 지혜의 근본이요 거룩하신 자를 아는 것이 명철이니라',
    reference: '잠언 9:10',
    questions: [
      { id: '39-ox', type: 'OX', questionText: '여호를 경외하는 것이 지혜의 시작이요 거룩하신 자를 아는 것이 명철이니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '39-fb', type: 'FILL_BLANK', questionText: '여호와를 경외하는 것이 지혜의 근본이요 거룩하신 자를 아는 것이 ( )이니라.', options: ['지식', '진리', '명철', '깨달음'], correctAnswer: '명철' }
    ]
  },
  {
    id: '40',
    text: '마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라',
    reference: '잠언 22:6',
    questions: [
      { id: '40-ox', type: 'OX', questionText: '마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 잊지 아니하리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '40-fb', type: 'FILL_BLANK', questionText: '마땅히 행할 ( )을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라.', options: ['말씀', '진리', '길', '계명'], correctAnswer: '길' }
    ]
  },
  {
    id: '41',
    text: '여호와의 이름은 견고한 망대라 의인은 그리로 달려가서 안전함을 얻느니라',
    reference: '잠언 18:10',
    questions: [
      { id: '41-ox', type: 'OX', questionText: '여호와의 이름은 견고한 성이라 의인은 그리로 달려가서 안전함을 얻느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '41-fb', type: 'FILL_BLANK', questionText: '여호와의 이름은 견고한 망대라 의인은 그리로 달려가서 ( )을 얻느니라.', options: ['구원', '평강', '안전함', '승리'], correctAnswer: '안전함' }
    ]
  },
  {
    id: '42',
    text: '내 사랑 너는 어여쁘고도 어여쁘다 너울 속에 있는 네 눈이 비둘기 같고 네 머리털은 길르앗 산 기슭에 누운 염소 떼 같구나',
    reference: '아가 4:1',
    questions: [
      { id: '42-ox', type: 'OX', questionText: '내 사랑 너는 어여쁘고도 어여쁘다 너울 속에 있는 네 눈이 비둘기 같고 네 머리털은 길르앗 산 기슭에 누운 염소 떼 같구나.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '42-fb', type: 'FILL_BLANK', questionText: '내 사랑 너는 어여쁘고도 어여쁘다 너울 속에 있는 네 눈이 비둘기 같고 네 머리털은 길르앗 산 기슭에 누운 ( ) 떼 같구나.', options: ['양', '사슴', '염소', '노루'], correctAnswer: '염소' }
    ]
  },
  {
    id: '43',
    text: '내 누이, 내 신부야 네 사랑이 어찌 그리 아름다운지 네 사랑은 포도주보다 진하고 네 기름의 향기는 각양 향품보다 향기롭구나',
    reference: '아가 4:10',
    questions: [
      { id: '43-ox', type: 'OX', questionText: '내 누이, 내 신부야 네 사랑이 어찌 그리 아름다운지 네 사랑은 꿀보다 진하고 네 기름의 향기는 각양 향품보다 향기롭구나.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '43-fb', type: 'FILL_BLANK', questionText: '내 누이, 내 신부야 네 사랑이 어찌 그리 아름다운지 네 사랑은 포도주보다 진하고 네 기름의 향기는 각양 향품보다 ( )구나.', options: ['달콤하', '향기롭', '귀하', '아름답'], correctAnswer: '향기롭' }
    ]
  },
  {
    id: '44',
    text: '보라 하나님은 나의 구원이시라 내가 신뢰하고 두려움이 없으리니 주 여호와는 나의 힘이시며 나의 노래시며 나의 구원이심이라',
    reference: '이사야 12:2',
    questions: [
      { id: '44-ox', type: 'OX', questionText: '보라 하나님은 나의 구원이시라 내가 신뢰하고 두려움이 없으리니 주 여호와는 나의 힘이시며 나의 찬양이시며 나의 구원이심이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '44-fb', type: 'FILL_BLANK', questionText: '보라 하나님은 나의 구원이시라 내가 ( )하고 두려움이 없으리니 주 여호와는 나의 힘이시며 나의 노래시며 나의 구원이심이라.', options: ['기도', '찬양', '신뢰', '순종'], correctAnswer: '신뢰' }
    ]
  },
  {
    id: '45',
    text: '두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라',
    reference: '이사야 41:10',
    questions: [
      { id: '45-ox', type: 'OX', questionText: '두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라.', options: ['O', 'X'], correctAnswer: 'O' },
      { id: '45-fb', type: 'FILL_BLANK', questionText: '두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 ( )게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라.', options: ['강하', '자유롭', '굳세', '담대하'], correctAnswer: '굳세' }
    ]
  },
  {
    id: '46',
    text: '그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 나음을 받았도다',
    reference: '이사야 53:5',
    questions: [
      { id: '46-ox', type: 'OX', questionText: '그가 찔림은 우리의 죄악 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 나음을 받았도다.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '46-fb', type: 'FILL_BLANK', questionText: '그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라 그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로 우리는 ( )을 받았도다.', options: ['구원', '자유', '나음', '은혜'], correctAnswer: '나음' }
    ]
  },
  {
    id: '47',
    text: '여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라',
    reference: '예레미야 29:11',
    questions: [
      { id: '47-ox', type: 'OX', questionText: '여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 평안이요 재앙이 아니니라 너희에게 소망과 희망을 주는 것이니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '47-fb', type: 'FILL_BLANK', questionText: '여호와의 말씀이니라 너희를 향한 나의 생각을 내가 아나니 ( )이요 재앙이 아니니라 너희에게 미래와 희망을 주는 것이니라.', options: ['구원', '복', '평안', '은혜'], correctAnswer: '평안' }
    ]
  },
  {
    id: '48',
    text: '너희가 온 마음으로 나를 구하면 나를 찾을 것이요 나를 만나리라',
    reference: '예레미야 29:13',
    questions: [
      { id: '48-ox', type: 'OX', questionText: '너희가 온 마음으로 나를 구하면 나를 찾을 것이요 나를 알리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '48-fb', type: 'FILL_BLANK', questionText: '너희가 온 ( )으로 나를 구하면 나를 찾을 것이요 나를 만나리라.', options: ['뜻', '힘', '마음', '정성'], correctAnswer: '마음' }
    ]
  },
  {
    id: '49',
    text: '예수께서 대답하여 이르시되 기록되었으되 사람이 떡으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 말씀으로 살 것이라 하였느니라',
    reference: '마태복음 4:4',
    questions: [
      { id: '49-ox', type: 'OX', questionText: '예수께서 대답하여 이르시되 기록되었으되 사람이 음식으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 말씀으로 살 것이라 하였느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '49-fb', type: 'FILL_BLANK', questionText: '예수께서 대답하여 이르시되 기록되었으되 사람이 떡으로만 살 것이 아니요 하나님의 입으로부터 나오는 모든 ( )으로 살 것이라 하였느니라.', options: ['진리', '말씀', '능력', '뜻'], correctAnswer: '말씀' }
    ]
  },
  {
    id: '50',
    text: '심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요',
    reference: '마태복음 5:3',
    questions: [
      { id: '50-ox', type: 'OX', questionText: '심령이 온유한 자는 복이 있나니 천국이 그들의 것임이요.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '50-fb', type: 'FILL_BLANK', questionText: '심령이 가난한 자는 복이 있나니 ( )이 그들의 것임이요.', options: ['영생', '구원', '천국', '하나님 나라'], correctAnswer: '천국' }
    ]
  },
  {
    id: '51',
    text: '그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라',
    reference: '마태복음 6:33',
    questions: [
      { id: '51-ox', type: 'OX', questionText: '그런즉 너희는 먼저 그의 나라와 그의 뜻을 구하라 그리하면 이 모든 것을 너희에게 더하시리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '51-fb', type: 'FILL_BLANK', questionText: '그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 ( )시리라.', options: ['주', '허락하', '더하', '채우'], correctAnswer: '더하' }
    ]
  },
  {
    id: '52',
    text: '나는 마음이 온유하고 겸손하니 나의 멍에를 메고 내게 배우라 그리하면 너희 마음이 쉼을 얻으리니',
    reference: '마태복음 11:29',
    questions: [
      { id: '52-ox', type: 'OX', questionText: '나는 마음이 온유하고 겸손하니 나의 멍에를 메고 내게 배우라 그리하면 너희 마음이 안식을 얻으리니.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '52-fb', type: 'FILL_BLANK', questionText: '나는 마음이 온유하고 ( )하니 나의 멍에를 메고 내게 배우라 그리하면 너희 마음이 쉼을 얻으리니.', options: ['거룩', '겸손', '선량', '인내'], correctAnswer: '겸손' }
    ]
  },
  {
    id: '53',
    text: '내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라',
    reference: '마태복음 28:20',
    questions: [
      { id: '53-ox', type: 'OX', questionText: '내가 너희에게 분부한 모든 것을 가르쳐 지키게 하라 볼지어다 내가 세상 끝날까지 너희와 언제나 함께 있으리라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '53-fb', type: 'FILL_BLANK', questionText: '내가 너희에게 분부한 모든 것을 ( )게 하라 볼지어다 내가 세상 끝날까지 너희와 항상 함께 있으리라.', options: ['알리', '가르쳐 지키', '따르', '순종하'], correctAnswer: '가르쳐 지키' }
    ]
  },
  {
    id: '54',
    text: '예수께서 그 하는 말을 곁에서 들으시고 회당장에게 이르시되 두려워하지 말고 믿기만 하라',
    reference: '마가복음 5:36',
    questions: [
      { id: '54-ox', type: 'OX', questionText: '예수께서 그 하는 말을 곁에서 들으시고 회당장에게 이르시되 두려워하지 말고 기도하라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '54-fb', type: 'FILL_BLANK', questionText: '예수께서 그 하는 말을 곁에서 들으시고 ( )에게 이르시되 두려워하지 말고 믿기만 하라.', options: ['제자들', '바리새인', '회당장', '무리'], correctAnswer: '회당장' }
    ]
  },
  {
    id: '55',
    text: '예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게는 능히 하지 못할 일이 없느니라',
    reference: '마가복음 9:23',
    questions: [
      { id: '55-ox', type: 'OX', questionText: '예수께서 이르시되 할 수 있거든이 무슨 말이냐 믿는 자에게는 능히 하지 못할 일이 드무니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '55-fb', type: 'FILL_BLANK', questionText: '예수께서 이르시되 할 수 있거든이 무슨 말이냐 ( ) 자에게는 능히 하지 못할 일이 없느니라.', options: ['구하는', '기도하는', '순종하는', '믿는'], correctAnswer: '믿는' }
    ]
  },
  {
    id: '56',
    text: '예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라',
    reference: '요한복음 14:6',
    questions: [
      { id: '56-ox', type: 'OX', questionText: '예수께서 이르시되 내가 곧 길이요 말씀이요 생명이니 나로 말미암지 않고는 아버지께로 올 자가 없느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '56-fb', type: 'FILL_BLANK', questionText: '예수께서 이르시되 내가 곧 길이요 진리요 생명이니 나로 말미암지 않고는 ( )께로 올 자가 없느니라.', options: ['하늘', '천국', '아버지', '하나님'], correctAnswer: '아버지' }
    ]
  },
  {
    id: '57',
    text: '너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라',
    reference: '요한복음 14:1',
    questions: [
      { id: '57-ox', type: 'OX', questionText: '너희는 마음에 두려워하지 말라 하나님을 믿으니 또 나를 믿으라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '57-fb', type: 'FILL_BLANK', questionText: '너희는 마음에 근심하지 말라 하나님을 믿으니 또 ( )를 믿으라.', options: ['진리', '나', '성령', '말씀'], correctAnswer: '나' }
    ]
  },
  {
    id: '58',
    text: '평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라',
    reference: '요한복음 14:27',
    questions: [
      { id: '58-ox', type: 'OX', questionText: '평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 다르니라 너희는 마음에 근심하지도 말고 두려워하지도 말라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '58-fb', type: 'FILL_BLANK', questionText: '( )을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라.', options: ['은혜', '위로', '평안', '기쁨'], correctAnswer: '평안' }
    ]
  },
  {
    id: '59',
    text: '나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무것도 할 수 없음이라',
    reference: '요한복음 15:5',
    questions: [
      { id: '59-ox', type: 'OX', questionText: '나는 포도나무요 너희는 잎이라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무것도 할 수 없음이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '59-fb', type: 'FILL_BLANK', questionText: '나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 ( )도 할 수 없음이라.', options: ['무엇', '아무것', '어떤 것', '선한 것'], correctAnswer: '아무것' }
    ]
  },
  {
    id: '60',
    text: '이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라',
    reference: '요한복음 16:33',
    questions: [
      { id: '60-ox', type: 'OX', questionText: '이것을 너희에게 이르는 것은 너희로 내 안에서 평안을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 극복하였노라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '60-fb', type: 'FILL_BLANK', questionText: '이것을 너희에게 이르는 것은 너희로 내 안에서 ( )을 누리게 하려 함이라 세상에서는 너희가 환난을 당하나 담대하라 내가 세상을 이기었노라.', options: ['기쁨', '자유', '평안', '구원'], correctAnswer: '평안' }
    ]
  },
  {
    id: '61',
    text: '모든 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니',
    reference: '로마서 3:23',
    questions: [
      { id: '61-ox', type: 'OX', questionText: '어떤 사람이 죄를 범하였으매 하나님의 영광에 이르지 못하더니.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '61-fb', type: 'FILL_BLANK', questionText: '모든 사람이 죄를 범하였으매 하나님의 ( )에 이르지 못하더니.', options: ['나라', '뜻', '영광', '말씀'], correctAnswer: '영광' }
    ]
  },
  {
    id: '62',
    text: '우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라',
    reference: '로마서 5:8',
    questions: [
      { id: '62-ox', type: 'OX', questionText: '우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 나타내셨느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '62-fb', type: 'FILL_BLANK', questionText: '우리가 아직 ( ) 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에 대한 자기의 사랑을 확증하셨느니라.', options: ['연약한 자', '원수', '죄인', '불신자'], correctAnswer: '죄인' }
    ]
  },
  {
    id: '63',
    text: '죄의 삯은 사망이요 하나님의 은사는 그리스도 예수 우리 주 안에 있는 영생이니라',
    reference: '로마서 6:23',
    questions: [
      { id: '63-ox', type: 'OX', questionText: '죄의 삯은 심판이요 하나님의 은사는 그리스도 예수 우리 주 안에 있는 영생이니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '63-fb', type: 'FILL_BLANK', questionText: '죄의 삯은 사망이요 하나님의 ( )는 그리스도 예수 우리 주 안에 있는 영생이니라.', options: ['축복', '사랑', '은사', '선물'], correctAnswer: '은사' }
    ]
  },
  {
    id: '64',
    text: '그런즉 이 일에 대하여 우리가 무슨 말 하리요 만일 하나님이 우리를 위하시면 누가 우리를 대적하리요',
    reference: '로마서 8:31',
    questions: [
      { id: '64-ox', type: 'OX', questionText: '그런즉 이 일에 대하여 우리가 무슨 말 하리요 만일 하나님이 우리를 위하시면 누가 우리를 심판하리요.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '64-fb', type: 'FILL_BLANK', questionText: '그런즉 이 일에 대하여 우리가 무슨 말 하리요 만일 ( )이 우리를 위하시면 누가 우리를 대적하리요.', options: ['그리스도', '여호와', '하나님', '성령'], correctAnswer: '하나님' }
    ]
  },
  {
    id: '65',
    text: '그러나 이 모든 일에 우리를 사랑하시는 이로 말미암아 우리가 넉넉히 이기느니라',
    reference: '로마서 8:37',
    questions: [
      { id: '65-ox', type: 'OX', questionText: '그러나 이 모든 일에 우리를 사랑하시는 이로 말미암아 우리가 충분히 이기느니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '65-fb', type: 'FILL_BLANK', questionText: '그러나 이 모든 일에 우리를 ( )하시는 이로 말미암아 우리가 넉넉히 이기느니라.', options: ['축복', '인도', '사랑', '도우'], correctAnswer: '사랑' }
    ]
  },
  {
    id: '66',
    text: '사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며',
    reference: '고린도전서 13:4',
    questions: [
      { id: '66-ox', type: 'OX', questionText: '사랑은 오래 참고 사랑은 온유하며 질투하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '66-fb', type: 'FILL_BLANK', questionText: '사랑은 오래 참고 사랑은 ( )하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며.', options: ['겸손', '온유', '선량', '인내'], correctAnswer: '온유' }
    ]
  },
  {
    id: '67',
    text: '그런즉 믿음, 소망, 사랑, 이 세 가지는 항상 있을 것인데 그 중의 제일은 사랑이라',
    reference: '고린도전서 13:13',
    questions: [
      { id: '67-ox', type: 'OX', questionText: '그런즉 믿음, 소망, 사랑, 이 세 가지는 항상 있을 것인데 그 중의 제일은 믿음이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '67-fb', type: 'FILL_BLANK', questionText: '그런즉 믿음, 소망, 사랑, 이 ( ) 가지는 항상 있을 것인데 그 중의 제일은 사랑이라.', options: ['두', '네', '세', '여러'], correctAnswer: '세' }
    ]
  },
  {
    id: '68',
    text: '너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라',
    reference: '에베소서 2:8',
    questions: [
      { id: '68-ox', type: 'OX', questionText: '너희는 그 은혜에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 축복이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '68-fb', type: 'FILL_BLANK', questionText: '너희는 그 ( )에 의하여 믿음으로 말미암아 구원을 받았으니 이것은 너희에게서 난 것이 아니요 하나님의 선물이라.', options: ['능력', '사랑', '은혜', '뜻'], correctAnswer: '은혜' }
    ]
  },
  {
    id: '69',
    text: '끝으로 너희가 주 안에서와 그 힘의 능력으로 강건하여지고',
    reference: '에베소서 6:10',
    questions: [
      { id: '69-ox', type: 'OX', questionText: '끝으로 너희가 주 안에서와 그 힘의 능력으로 굳건하여지고.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '69-fb', type: 'FILL_BLANK', questionText: '끝으로 너희가 주 안에서와 그 힘의 ( )으로 강건하여지고.', options: ['은혜', '영광', '능력', '말씀'], correctAnswer: '능력' }
    ]
  },
  {
    id: '70',
    text: '모든 눈물을 그 눈에서 닦아 주시니 다시는 사망이 없고 애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 아니하리니 처음 것들이 다 지나갔음이러라',
    reference: '요한계시록 21:4',
    questions: [
      { id: '70-ox', type: 'OX', questionText: '모든 눈물을 그 눈에서 닦아 주시니 다시는 사망이 없고 애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 아니하리니 옛 것들이 다 지나갔음이러라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '70-fb', type: 'FILL_BLANK', questionText: '모든 눈물을 그 눈에서 닦아 주시니 다시는 ( )이 없고 애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 아니하리니 처음 것들이 다 지나갔음이러라.', options: ['고통', '슬픔', '사망', '어둠'], correctAnswer: '사망' }
    ]
  },
  {
    id: '71',
    text: '너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라',
    reference: '베드로전서 5:7',
    questions: [
      { id: '71-ox', type: 'OX', questionText: '너희 근심을 다 주께 맡기라 이는 그가 너희를 돌보심이라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '71-fb', type: 'FILL_BLANK', questionText: '너희 염려를 다 주께 맡기라 이는 그가 너희를 ( )심이라.', options: ['아끼', '사랑하', '돌보', '지키'], correctAnswer: '돌보' }
    ]
  },
  {
    id: '72',
    text: '믿음이 없이는 기쁘시게 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라',
    reference: '히브리서 11:6',
    questions: [
      { id: '72-ox', type: 'OX', questionText: '믿음이 없이는 기쁘시게 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 복 주시는 이심을 믿어야 할지니라.', options: ['O', 'X'], correctAnswer: 'X' },
      { id: '72-fb', type: 'FILL_BLANK', questionText: '믿음이 없이는 ( )게 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라.', options: ['순종하', '기쁘시', '영광스럽', '감사하'], correctAnswer: '기쁘시' }
    ]
  }
];

export const BIBLE_BOOKS = [
  '창세기', '출애굽기', '레위기', '민수기', '신명기', '여호수아', '사사기', '루스기', '사무엘상', '사무엘하', '열왕기상', '열왕기하', '역대상', '역대하', '에스라', '느헤미야', '에스더', '욥기', '시편', '잠언', '전도서', '아가', '이사야', '예레미야', '예레미야애가', '에스겔', '다니엘', '호세아', '요엘', '아모스', '오바댜', '요나', '미가', '나훔', '하박국', '스바냐', '학개', '스가랴', '말라기',
  '마태복음', '마가복음', '누가복음', '요한복음', '사도행전', '로마서', '고린도전서', '고린도후서', '갈라디아서', '에베소서', '빌립보서', '골로새서', '데살로니가전서', '데살로니가후서', '디모데전서', '디모데후서', '디도서', '빌레몬서', '히브리서', '야고보서', '베드로전서', '베드로후서', '요한1서', '요한2서', '요한3서', '유다서', '요한계시록'
];
