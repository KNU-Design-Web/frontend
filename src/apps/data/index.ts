type DataItem = {
    id: number;
    author: {
        name: {
            ko: string;
            en: string;
            displayName: string;
        };
        email: string;
        instagram: string | null;
        link: string | null;
    };
    project: {
        thumbnail: string;
        title: string[];
        hashtags: string[];
        description: string[];
        contents: string[];
    };
};

export const data: DataItem[] = [
    {
        id: 1,
        author: {
            name: {
                ko: "구지원",
                en: "Jiwon Koo",
                displayName: "KOO. JI WON",
            },
            email: "kooojw0542@gmail.com",
            instagram: "kooowkk",
            link: "https://www.behance.net/koojiwon",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Jiwon-Koo_980x500.webp",
            title: ["sceeent", " : see your sceeent"],
            hashtags: ["#브랜딩", "#제품디자인", "#UXUI", "#데이터비주얼라이징", "#후각의 시각화"],
            description: [
                "온라인 구매의 증가로 소비자들은 예상치 못한 향을 경험하게 되고 이로 인해 브랜드는 부정적인 이미지를 얻게 되는 경우가 발생하고 있습니다.",
                "sceeent는 사람의 오감을 활용하여 향에 대한 새로운 기준을 제시하고 나를 새롭게 표현하는 방법을 제안하고자 합니다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Jiwon-Koo/project1.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Koo/project2.webm",
                "https://images.knud2024.com/project-individual/Jiwon-Koo/project3.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Koo/project4.webp",
            ],
        },
    },
    {
        id: 2,
        author: {
            name: {
                ko: "김경민",
                en: "Kyoungmin Kim",
                displayName: "KIM. KYOUNG MIN",
            },
            email: "kimys4306@naver.com",
            instagram: "k._mini_",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Kyoungmin-Kim_980x500.webp",
            title: ["PerLens"],
            hashtags: ["#UXUI디자인", "#카메라", "#렌즈", "#모임", "#공유", "#커뮤니케이션"],
            description: [
                "PerLens는 각각의(Per) 렌즈들(Lens)들이 모여 하나(모임)를 이룬다는 의미를 지닌다.",
                "Friends와 비슷한 발음으로, 친구들과의 즐거운 만남처럼 서로 필요로 하는 렌즈들을 사용해보기 위해 모임을 이루는 과정이 활발히 이루어지기를 기원한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project1.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project2.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project3.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project4.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project5.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project6.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project7.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project8.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project9.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project10.webp",
                "https://images.knud2024.com/project-individual/Kyoungmin-Kim/project11.webp",
            ],
        },
    },
    {
        id: 3,
        author: {
            name: {
                ko: "김도연",
                en: "Doyeon Kim",
                displayName: "KIM. DO YEON",
            },
            email: "rlaehdus1109@naver.com",
            instagram: "r._.orn",
            link: "https://www.behance.net/rlaehdus11a58b",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Doyeon-Kim_980x500.webp",
            title: ["한글 지도 브랜드,", "한글일지도"],
            hashtags: ["#UXUI디자인", "#브랜딩", "#프로덕트디자인", "#키즈", "#한글", "#학습"],
            description: [
                "공부를 하는 행위가 아닌, 즐겁게 낙서하고 놀며 한글학습 및 다중지능 학습까지 유도하는 브랜드.",
                "생성형 AI를 이용해 놀이 중심에서 사고력 증진을 위한 콘텐츠로 서비스 영역을 확장시켜 아이들의 무궁무진한 창의력과 어휘력을 바탕으로 직접 학습활동을 만들어나가는 가치를 제공한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project1.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project2.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project3.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project4.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project5.webm",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project6.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project7.webm",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project8.webm",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project9.webm",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project10.webm",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project11.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project12.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project13.webp",
                "https://images.knud2024.com/project-individual/Doyeon-Kim/project14.webp",
            ],
        },
    },
    {
        id: 4,
        author: {
            name: {
                ko: "김수린",
                en: "Surin Kim",
                displayName: "KIM. SU RIN",
            },
            email: "sorahiyo7@gmial.com",
            instagram: "sulsu_",
            link: "https://www.behance.net/sorahiyo77398",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Surin-Kim_980x500.webp",
            title: ["MEALDANG"],
            hashtags: ["#UXUI", "#서비스디자인", "#혈당스파이크", "#게이미피케이션"],
            description: [
                "MEALDANG은 혈당 스파이크를 예방하기 위한 저강도 운동을 할 수 있게 돕는 앱이다.",
                "게이미피케이션 디자인을 통해 사용자들의 지속적인 사용을 유도하고 연속혈당측정기와의 연동으로 정확한 데이터를 기반으로 한 운동을 가능하게 한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Surin-Kim/project1.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project2.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project3.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project4.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project5.webm",
                "https://images.knud2024.com/project-individual/Surin-Kim/project6.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project7.webp",
                "https://images.knud2024.com/project-individual/Surin-Kim/project8.webp",
            ],
        },
    },
    {
        id: 5,
        author: {
            name: {
                ko: "김정은",
                en: "Jungeun Kim",
                displayName: "KIM. JUNG EUN",
            },
            email: "jini.2024.25@gmail.com",
            instagram: "eternidad.24",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Jungeun-Kim_980x500.webp",
            title: ["PINGER."],
            hashtags: ["#UXUI", "#디지털디톡스"],
            description: [
                "여러분은 효율적이고 적절한 의료 서비스를 받고 있나요?",
                "PINGER는 손끝을 이용해 자신의 상태에 대한 증상 신호를 보내고, 적합한 건강분석 결과를 얻을 수 있는 앱 서비스이다.",
                "효과적인 네트워크 진단을 위해 핑(PING)을 쏘듯, PINGER를 통해 우리의 의료 시스템이 더욱 효율적인 환경으로 조성되길 바란다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project1.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project2.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project3.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project4.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project5.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project6.webm",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project7.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project8.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project9.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project10.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project11.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project12.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project13.webp",
                "https://images.knud2024.com/project-individual/Jungeun-Kim/project14.webp",
            ],
        },
    },
    {
        id: 6,
        author: {
            name: {
                ko: "김현민",
                en: "Hyeonmin Kim",
                displayName: "KIM. HYEON MIN",
            },
            email: "hyeonmin0824@gmail.com",
            instagram: "whsixp",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Hyeonmin-Kim_980x500.webp",
            title: ["hiDD"],
            hashtags: ["#UXUI 디자인", "#아이덴티티 디자인", "#픽셀아트", "#디지털 디톡스", "#사용자의 자율성 보장"],
            description: [
                "[ 하루 종일 스마트폰만 했다면? DD와 함께 디지털 디톡스! ]",
                "2023 스마트폰 과의존 실태조사에 따르면 이용량이 증가한 콘텐츠와 부작용이 우려되는 콘텐츠 간의 교집합이 있다.",
                "hiDD는 이러한 콘텐츠를 관리하여 스마트폰을 건강하게 사용할 수 있도록 도와주는 모바일 앱이다.",
                "또한 도서 상품권, 영화 관람권 등과 같은 오프라인 활동으로 이어지는 리워드를 지급한다.",
                "이를 통해 사용자의 동기부여를 자극하여 자율적이고 부담스럽지 않은 디지털 디톡스를 제공한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project1.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project2.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project3.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project4.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project5.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project6.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project7.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project8.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project9.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project10.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project11.webp",
                "https://images.knud2024.com/project-individual/Hyeonmin-Kim/project12.webp",
            ],
        },
    },
    {
        id: 7,
        author: {
            name: {
                ko: "문예림",
                en: "Yerim Moon",
                displayName: "MOON. YERIM",
            },
            email: "myl0920@naver.com",
            instagram: "ri_m2_",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yerim-Moon_980x500.webp",
            title: ["別書別酒"],
            hashtags: ["#Branding", "#Package Design", "#Motion Graphic"],
            description: [
                "서(유언장)와 이별 주(술)를 통해 사람들에게 자신의 삶을 돌아보고 정리하는 경험을 선사한다.",
                "죽음을 인식하고 삶의 유한성을 깨닫게 함으로써, 죽음에 대비하고 죽음에 대한 두려움을 부드럽게 해소할 수 있도록 돕는다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yerim-Moon/project1.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project2.webm",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project3.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project4.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project5.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project6.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project7.webm",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project8.webm",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project9.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project10.webp",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project11.webm",
                "https://images.knud2024.com/project-individual/Yerim-Moon/project12.webp",
            ],
        },
    },
    {
        id: 8,
        author: {
            name: {
                ko: "손희주",
                en: "Heeju Son",
                displayName: "SON. HEE JU",
            },
            email: "sonheeju2014@naver.com",
            instagram: "zooya._.design",
            link: "behance.net/64528efd",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Heeju-Son_980x500.webp",
            title: ["Escape the Earth"],
            hashtags: ["#브랜딩", "#패키지디자인", "#UI", "#우주", "#여행"],
            description: [
                "과거에 상상만 하던 우주여행이 과학기술의 발전 덕분에 이제는 멀지 않은 미래로 다가왔다.",
                "'Escape the Earth'는 미래의 우주 항공 크루즈 브랜드로, 크루즈 이용을 위한 모바일 앱과 크루즈 내에서 제공될 제품 패키지를 포함한 브랜드 디자인 프로젝트이다.",
                "브랜드는 누구나 꿈꾸던 우주여행을 현실로 만들어 고객에게 새로운 패러다임을 제시하는 것을 목표로 한다.",
                "이 프로젝트가 우주여행을 꿈꾸던 여러분에게 체험해 볼 수 있는 기회를 제공하길 바란다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Heeju-Son/project1.webp",
                "https://images.knud2024.com/project-individual/Heeju-Son/project2.webp",
                "https://images.knud2024.com/project-individual/Heeju-Son/project3.webp",
                "https://images.knud2024.com/project-individual/Heeju-Son/project4.webp",
            ],
        },
    },
    {
        id: 9,
        author: {
            name: {
                ko: "심유진",
                en: "Yujin Sim",
                displayName: "SIM. YUJIN",
            },
            email: "woebsd@naver.com",
            instagram: "jin11043",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yujin-Sim_980x500.webp",
            title: ["숲속양 대소동"],
            hashtags: ["#어린이", "#보드게임", "#ADHD", "#UXUI디자인", "#놀이치료"],
            description: [
                "숲속양 대소동은 ‘숲에서 길을 잃은 양들이 다같이 숲의 위험을 헤쳐나가며 탈출한다’는 목표와 스토리를 담은 보드게임이며, ADHD 아동을 대상으로 하였다.",
                "주의력 결핍, 충동성 등의 증상으로 여러 문제를 보이는 ADHD 아동이 보드게임 같은 놀이치료를 하면 전두엽 기능이 향상되고 증상이 호전된다는 사실에 착안하여 보드게임을 제작하였다.",
                "집중과 충동조절을 하기 어려워하는 ADHD 아동의 특징을 고려한 정보를 보드게임에 넣어 쉽게 즐길 수 있도록 하였다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yujin-Sim/project1.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project2.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project3.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project4.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project5.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project6.webp",
                "https://images.knud2024.com/project-individual/Yujin-Sim/project7.webp",
            ],
        },
    },
    {
        id: 10,
        author: {
            name: {
                ko: "오연수",
                en: "Yeonsu Oh",
                displayName: "OH. YEON SU",
            },
            email: "doridolls_o@naver.com",
            instagram: "mango.dub_ai",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yeonsu-Oh_980x500.webp",
            title: ["햄☆스타 대모험"],
            hashtags: ["#동화책", "#반려동물", "#어린이", "#모험"],
            description: [
                "햄☆스타 대모험은 어쩌다 같은 집에 살게 된 두 친구의 이야기다.",
                "집으로 돌아가기 위해 매일 밤마다 분주하게 도전하는 햄이와 그 사실은 모른 채 매일 밤 수상하게 움직이는 햄이를 의심하는 나초의 모습으로 이야기가 시작된다.",
                "하지만 여러 모험을 통해 끈끈한 우정을 쌓으며 두 마리의 동물들 사이에 어떠한 변화가 있는지 같이 성장하며 즐길 수 있는 동화책이다.",
                "그리고 사람과 강아지, 햄스터의 다른 생체시간을 은은하게 포함하여 책을 읽는 어린이들에게 반려동물과의 이별을 의연하게 보낼 수 있도록 도와주고자 한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project1.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project2.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project3.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project4.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project5.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project6.webp",
                "https://images.knud2024.com/project-individual/Yeonsu-Oh/project7.webp",
            ],
        },
    },
    {
        id: 11,
        author: {
            name: {
                ko: "원민주",
                en: "Minju Won",
                displayName: "WON. MIN JU",
            },
            email: "won051781ohj@naver.com",
            instagram: "0nemnn",
            link: "miryutats",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Minju-Won_980x500.webp",
            title: ["MIRYU tats"],
            hashtags: ["#아트프로젝트", "#브랜딩", "#tattoo"],
            description: [
                "MIRYU tats은 자연과의 연결을 중요한 가치로 삼아, 디지털 시대 속에서도 자연의 요소를 잃지 않으려는 메시지를 담은 타투 아트 프로젝트이다.",
                "미류라는 이름처럼, 타투를 통해 자연의 아름다움과 평온함을 몸에 새기는 작업을 지향한다.",
                "이를 통해, 타투를 받는 이들이 자연과 교감하고, 그 안에서 스스로를 찾아가는 과정으로 타투를 경험할 수 있도록 돕는다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Minju-Won/project1.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project2.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project3.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project4.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project5.webm",
                "https://images.knud2024.com/project-individual/Minju-Won/project6.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project7.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project8.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project9.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project10.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project11.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project12.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project13.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project14.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project15.webp",
                "https://images.knud2024.com/project-individual/Minju-Won/project16.webp",
            ],
        },
    },
    {
        id: 12,
        author: {
            name: {
                ko: "유다빈",
                en: "Dabin Yu",
                displayName: "YU. DA BIN",
            },
            email: "dbekqls1217@naver.com",
            instagram: null,
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Dabin-Yu_980x500.webp",
            title: ["4 ICE CUBES"],
            hashtags: ["#패키지디자인", "#헤어케어", "#쿨링", "#탈모완화"],
            description: [
                "‘4 ICE CUBES’는 탈모 원인 중 하나인 두피열을 낮춰주고 소비자에게 시원한 경험을 제공하는 헤어 케어 브랜드이다.",
                "제품의 주 성분은 식약처에서 발표한 탈모기능성완화 성분인 페퍼민트 잎 추출물 ‘엘-맨톨’이다.",
                "브랜드를 얼음틀, 브랜드의 제품 4가지를 얼음으로 비유하여 얼음과 페퍼민트를 통해 시각적 쿨링 경험을 제공한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Dabin-Yu/project1.webp",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project2.webp",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project3.webp",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project4.webp",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project5.webp",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project6.webm",
                "https://images.knud2024.com/project-individual/Dabin-Yu/project7.webp",
            ],
        },
    },
    {
        id: 13,
        author: {
            name: {
                ko: "이시훈",
                en: "Sihun Lee",
                displayName: "LEE. SI HUN",
            },
            email: "tjshhy01@naver.com",
            instagram: null,
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Sihun-Lee_980x500.webp",
            title: ["OPERATION LEVEL: CHAOS"],
            hashtags: ["#게임기획디자인", "#FPS", "#PVPVE", "#군사", "#전술", "#협동", "#좀비", "#현대전"],
            description: [
                "PvP와 PvE가 결합된 전술 FPS 게임.",
                "NATO, 비우호 세력, 미 특수부대 등 세력 간의 치열한 전투 속에서, 좀비 크리쳐와 같은 강력한 NPC들을 상대하며 주요 정보를 탈취하고 생존을 목표로 한다.",
                "다양한 환경이 존재하는 연구소에서 교전하며, 자원을 확보하고 끊임없이 변화하는 전장에서 동료와 적을 구별하지 못하는 혼란 속에서 최하층 탈출을 시도해야 한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Sihun-Lee/project1.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project2.webm",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project3.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project4.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project5.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project6.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project7.webm",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project8.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project9.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project10.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project11.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project12.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project13.webp",
                "https://images.knud2024.com/project-individual/Sihun-Lee/project14.webp",
            ],
        },
    },
    {
        id: 14,
        author: {
            name: {
                ko: "전유나",
                en: "Yuna Jeon",
                displayName: "JEON. YUNA",
            },
            email: "scurkould@naver.com",
            instagram: "scurkould",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yuna-Jeon_980x500.webp",
            title: ["PROJECT. DE:CORAL"],
            hashtags: ["#디자인프로젝트", "#웹디자인", "#데이터비주얼라이징", "#산호", "#백화현상"],
            description: [
                "PROJECT DE:CORAL은 백화현상의 '시간'에 주목하여, 이 현상의 시간적 개념을 깊이 있게 탐구한다.",
                "이 프로젝트를 통해 상대적으로 생소한 산호의 백화현상을 직관적으로 이해할 수 있도록 돕고, 대중의 경각심을 높이는 데 기여하고자 한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project1.webp",
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project2.webp",
                //TODO: "https://images.knud2024.com/project-individual/Yuna-Jeon/project3.webp",
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project4.webp",
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project5.webm",
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project6.webp",
                "https://images.knud2024.com/project-individual/Yuna-Jeon/project7.webp",
            ],
        },
    },
    {
        id: 15,
        author: {
            name: {
                ko: "전하연",
                en: "Hayeon Jeon",
                displayName: "JEON. HAYEON",
            },
            email: "qldnffl5@naver.com",
            instagram: "dnddod320",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Hayeon-Jeon_980x500.webp",
            title: ["MOVEMENT"],
            hashtags: ["#패키지디자인", "#브랜딩", "#씨앗", "#환경문제", "#꽃"],
            description: [
                "한 책에서 ‘아이들이 소꿉놀이를 할 때, 무의식적으로 역할에 대한 관념을 고착화시킬 수 있다’라는 문구를 보았다.",
                "많은 의미를 담고 있는 문장이지만, 우리는 문장 속에서 [ 아이들의 문화와 놀이가 아이의 가치관에 무의식적으로 영향을 줄 수 있음 ]을 발견하고 집중했다.",
                "그래서 ‘MOVEMENT’는 아이들이 꽃을 피우는 문화를 만들고,",
                "이들이 성장해 더 나은 환경을 만들고 미래를 기대하고 싶어하는 ‘움직임’을 만들려고 한다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project1.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project2.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project3.webm",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project4.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project5.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project6.webm",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project7.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project8.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project9.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project10.webp",
                "https://images.knud2024.com/project-individual/Hayeon-Jeon/project11.webp",
            ],
        },
    },
    {
        id: 16,
        author: {
            name: {
                ko: "정유정",
                en: "Yujung Jung",
                displayName: "JUNG. YUJUNG",
            },
            email: "moho24@naver.com",
            instagram: "moho_coffee_",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yujung-Jung_980x500.webp",
            title: ["MOHO COFFEE"],
            hashtags: ["#카페브랜드", "#브랜딩", "#커피", "#패키지디자인"],
            description: [
                "현대인의 바쁜 일상으로 인해 지친 마음을 위로할 카페 MOHO COFFEE의 전반적인 브랜딩을 진행하였다.",
                "고즈넉하고 엔틱한 다방 분위기를 연출하면서 동시에 차분한 난색 컬러, 아이덴티티에 맞는 일러스트를 이용해 그래픽 요소를 설정하였다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yujung-Jung/project1.webm",
                "https://images.knud2024.com/project-individual/Yujung-Jung/project2.webp",
                "https://images.knud2024.com/project-individual/Yujung-Jung/project3.webp",
                "https://images.knud2024.com/project-individual/Yujung-Jung/project4.webp",
            ],
        },
    },
    {
        id: 17,
        author: {
            name: {
                ko: "최민지",
                en: "Minji Choi",
                displayName: "CHOI. MINJI",
            },
            email: "kiwiapple511@gmail.com",
            instagram: null,
            link: "https://www.behance.net/kiwiapple5098a",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Minji-Choi_980x500.webp",
            title: ["Cub(eX)"],
            hashtags: ["#브랜딩", "#모션그래픽", "#영상"],
            description: [
                "'Experience expands, explore the extremes'",
                "디지털 기기와 함께 살아가는 것이 자연스러워진 지금, AR과 같은 증강현실 기술은 상상과 현실의 경계를 줄이는 방식으로 사용자에게 새로운 경험을 선사한다.",
                "Cub(eX)의 사용자는 정육면체 형태의 큐브를 통해 컴퓨터와 상호작용한다.",
                "직관적인 큐브의 물리적인 움직임(돌리기, 밀기, 누르기)을 통해 오프라인과 디지털 간의 어색함을 줄일 수 있다.",
                "이러한 Cub(eX)의 이미지를 잘 나타낼 수 있는 모션그래픽 영상을 제작했다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Minji-Choi/project1.webp",
                // TODO: project2.txt 파일을 webp로 변환
                "https://images.knud2024.com/project-individual/Minji-Choi/project3.webp",
                "https://images.knud2024.com/project-individual/Minji-Choi/project4.webm",
                "https://images.knud2024.com/project-individual/Minji-Choi/project5.webm",
                "https://images.knud2024.com/project-individual/Minji-Choi/project6.webp",
            ],
        },
    },
    {
        id: 18,
        author: {
            name: {
                ko: "최장익",
                en: "Jangik Choi",
                displayName: "CHOI. JANGIK",
            },
            email: "wkdwkdgks@naver.com",
            instagram: "jjangik2",
            link: "https://www.behance.net/31c5c920",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Jangik-Choi_980x500.webp",
            title: ["DMZ"],
            hashtags: ["#브랜딩", "#패키지디자인", "#자연", "#환경", "#DMZ"],
            description: [
                "비무장지대는 정전협정 이후 약 60여 년이 넘는 긴 시간 동안 인간의 출입이 통제되어 왔다.",
                "인간의 출입이 통제된 상황에서 자연스럽게 다양한 동식물들이 집단적으로 서식하는 생태적 가치가 매우 높은 지역이 되었다.",
                "이러한 DMZ를 통일 후에 평화와 생태보전의 중요한 영역으로서 보다 적극적으로 활용하기 위한 하나의 방안으로 생태공원 브랜딩 프로젝트를 기획하게 되었다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Jangik-Choi/project1.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project2.webm",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project3.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project4.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project5.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project6.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project7.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project8.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project9.webm",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project10.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project11.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project12.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project13.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project14.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project15.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project16.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project17.webp",
                "https://images.knud2024.com/project-individual/Jangik-Choi/project18.webm",
            ],
        },
    },
    {
        id: 19,
        author: {
            name: {
                ko: "한영욱",
                en: "Youngwook Han",
                displayName: "HAN. YOUNGWOOK",
            },
            email: "hanyw1138@gmail.com",
            instagram: "iaan_han",
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Youngwook-Han_980x500.webp",
            title: ["Goldenhill"],
            hashtags: ["#패키지디자인", "#브랜딩"],
            description: [
                "기존 본인 브랜드의 확장과 아이덴티티 확립을 위한 작업이다.",
                "Goldenhill은 한 건물에 애견카페, 용품 판매, 호텔 등이 함께 있는 복합 애견 문화공간이다.",
            ],
            contents: ["https://images.knud2024.com/project-individual/Youngwook-Han/project1.webp"],
        },
    },
    {
        id: 20,
        author: {
            name: {
                ko: "한지원",
                en: "Jiwon Han",
                displayName: "HAN. JIWON",
            },
            email: "jiwoni0929@naver.com",
            instagram: null,
            link: null,
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Jiwon-Han_980x500.webp",
            title: ["주파수연구소 FM"],
            hashtags: ["#웹디자인", "#가족", "#소통유형", "#테스트", "#모바일"],
            description: [
                "여기, 주파수연구소 FM에서는 가족 사이 표현 방식 유형을 5가지 주파수 유형에 빗대어 연구한다.",
                "가족 사이 서로의 주파수가 다르면, 소통에 오류가 발생하기 쉽다는 것이 연구결과이다.",
                "나는 평소에 가족에게 어떤 표현을 하는 주파수인지, 또 나의 주파수에서 발생하는 오류와 해결 tip을 알아보고, 가족과 공유하며 서로 다른 우리를 이해하는 시간을 가져보자.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Jiwon-Han/project1.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project2.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project3.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project4.webm",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project4.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project5.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project6.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project7.webp",
                "https://images.knud2024.com/project-individual/Jiwon-Han/project8.webp",
            ],
        },
    },
    {
        id: 21,
        author: {
            name: {
                ko: "허연주",
                en: "Yeonju Heo",
                displayName: "HEO. YEON JU",
            },
            email: "duswn9023@knu.ac.kr",
            instagram: "hepijuu",
            link: "https://www.behance.net/5cfcd2b8",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Yeonju-Heo_980x500.webp",
            title: ["無形無産"],
            hashtags: ["#캠페인", "#브랜딩", "#무형유산", "#전통", "#한국"],
            description: [
                "무형유산은 그 이름처럼, 형태를 가지지 않는 유산을 의미한다.",
                "무형유산은 고정된 것이 아닌 공동체, 사회와 상호작용하며 지속적으로 변화하며 살아있는 문화다.",
                "따라서, 무형유산은 공동체 내에서 공유되는 집단적 성격을 가지며, 사람을 통해 전승되기 때문에 소실될 가능성도 크다.",
                "현재 한국 무형유산 보유자 평균 연령은 75세로 고령화가 심각하며, 약 40%의 종목은 보유자가 단 한 명만 남아있다.",
                "다음 세대에게 전달, 전승되어야 할 우리의 유산이 무산되고 있는 상황이다.",
                "따라서 무형유산에 대한 한국의 다음 세대에게 관심을 촉구하기 위해, 무형유산을 현대적으로 재해석하여 시각적 표현을 하였다.",
                "이를 통해 생소하게 느껴질 수 있는 무형유산의 장벽을 허물고자 했다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project1.webm",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project2.webp",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project3.webm",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project4.webm",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project5.webp",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project6.webp",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project7.webp",
                "https://images.knud2024.com/project-individual/Yeonju-Heo/project8.webp",
            ],
        },
    },
    {
        id: 22,
        author: {
            name: {
                ko: "황수정",
                en: "Sujung Hwang",
                displayName: "HWANG. SUJUNG",
            },
            email: "sujung0155@gmail.com",
            instagram: "d_bysjh",
            link: "https://be.net/hwangsusu",
        },
        project: {
            thumbnail: "https://images.knud2024.com/project-horizontal-thumbnail/Sujung-Hwang_980x500.webp",
            title: ["Workin_"],
            hashtags: ["#브랜딩 #워케이션 #워라벨 #휴가 #일"],
            description: [
                "사무실을 벗어나 새로운 장소에서, 언제 어디서든 워케이션 :   원격 / 재택근무 선호 증가 및 워라벨을 중시하는 MZ세대의 라이프 스타일에 따라 휴가지에서 근무하는 워케이션(Work+Vacation= Workcation)이 트렌드로 떠오르고 있다.",
                "이에 따라, 워케이션 장소를 제공하고 근무 후에는 주변의 액티비티를 경험할 수 있는 워케이션 브랜드 “Workin_”을 디자인하였다.",
            ],
            contents: [
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project1.webm",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project2.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project3.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project4.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project5.webm",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project6.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project7.webm",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project8.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project9.webp",
                "https://images.knud2024.com/project-individual/Sujung-Hwang/project10.webp",
            ],
        },
    },
];
