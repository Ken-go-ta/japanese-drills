export const questions = [
    {
        question: 'わたしは毎朝7時（ ）起きます。',
        kana: 'わたしはまいあさ7じ（ ）おきます。',
        romaji: 'Watashi wa maiasa 7-ji ( ) okimasu.',
        options: ['を/o', 'に/ni', 'で/de', 'が/ga'],
        correct: 'に/ni',
        explanation: 'Use "に" when indicating a specific time. For example, "7時に起きます" means "I wake up at 7 o\'clock."',
    },
    {
        question: 'わたしは毎日、日本語（ ）勉強します。',
        kana: 'わたしはまいにち、にほんご（ ）べんきょうします。',
        romaji: 'Watashi wa mainichi, nihongo ( ) benkyou shimasu.',
        options: ['が/ga', 'に/ni', 'を/o', 'へ/e'],
        correct: 'を/o',
        explanation: 'Use "を" to mark the direct object of an action. 日本語を勉強します means "I study Japanese."',
    },
    {
        question: 'きのう、友達（ ）映画を見ました。',
        kana: 'きのう、ともだち（ ）えいがをみました。',
        romaji: 'Kinou, tomodachi ( ) eiga o mimashita.',
        options: ['に/ni', 'で/de', 'と/to', 'を/o'],
        correct: 'と/to',
        explanation: 'Use "と" when doing something together with someone. 友達と means "with a friend."',
    },
    {
        question: 'わたしは学校（ ）日本語を勉強します。',
        kana: 'わたしはがっこう（ ）にほんごをべんきょうします。',
        romaji: 'Watashi wa gakkou ( ) nihongo o benkyou shimasu.',
        options: ['に/ni', 'で/de', 'を/o', 'が/ga'],
        correct: 'で/de',
        explanation: 'Use "で" to indicate the place where an action takes place. 学校で means "at school."',
    },
    {
        question: 'この部屋にはテレビ（ ）あります。',
        kana: 'このへやにはてれび（ ）あります。',
        romaji: 'Kono heya ni wa terebi ( ) arimasu.',
        options: ['を/o', 'に/ni', 'が/ga', 'で/de'],
        correct: 'が/ga',
        explanation: 'Use "が" to mark the thing that exists. テレビがあります means "There is a TV."',
    },
    {
        question: '田中さんは毎朝コーヒーを（ ）。',
        kana: 'たなかさんはまいあさこーひーを（ ）。',
        romaji: 'Tanaka-san wa maiasa koohii o ( ).',
        options: [
            '飲みます/のみます/nomimasu',
            '食べます/たべます/tabemasu',
            '見ます/みます/mimasu',
            '聞きます/ききます/kikimasu'
        ],
        correct: '飲みます/のみます/nomimasu',
        explanation: '飲みます means "to drink." We use it with drinks such as coffee.',
    },
    {
        question: 'きのうは雨が（ ）。',
        kana: 'きのうはあめが（ ）。',
        romaji: 'Kinou wa ame ga ( ).',
        options: [
            '降ります/ふります/furimasu',
            '降りました/ふりました/furimashita',
            '降りません/ふりません/furimasen',
            '降りたいです/ふりたいです/furitaidesu'
        ],
        correct: '降りました/ふりました/furimashita',
        explanation: 'Use "ました" to express a past action. Since "きのう" means "yesterday," the past form "降りました" is correct.',
    },
    {
        question: 'ここで写真を（ ）もいいですか。',
        kana: 'ここでしゃしんを（ ）もいいですか。',
        romaji: 'Koko de shashin o ( ) mo ii desu ka.',
        options: [
            '撮ります/とります/torimasu',
            '撮って/とって/totte',
            '撮る/とる/toru',
            '撮った/とった/totta'
        ],
        correct: '撮って/とって/totte',
        explanation: 'Use the te-form with "もいいですか" to ask for permission. 撮ってもいいですか means "May I take a picture?"',
    },
    {
        question: 'わたしは日本へ（ ）たいです。',
        kana: 'わたしはにほんへ（ ）たいです。',
        romaji: 'Watashi wa Nihon e ( ) tai desu.',
        options: [
            '行き/いき/iki',
            '行く/いく/iku',
            '行って/いって/itte',
            '行か/いか/ika'
        ],
        correct: '行き/いき/iki',
        explanation: 'Attach "たいです" to the verb stem. 行きたいです means "I want to go."',
    },
    {
        question: '日曜日は休みなので、学校へ（ ）。',
        kana: 'にちようびはやすみなので、がっこうへ（ ）。',
        romaji: 'Nichiyoubi wa yasumi na node, gakkou e ( ).',
        options: [
            '行きます/いきます/ikimasu',
            '行きません/いきません/ikimasen',
            '行きました/いきました/ikimashita',
            '行きたいです/いきたいです/ikitaidesu'
        ],
        correct: '行きません/いきません/ikimasen',
        explanation: 'Use "ません" to express a negative action. 行きません means "will not go" or "do not go."',
    },
    {
        question: 'わたしは毎朝パン（ ）食べます。',
        kana: 'わたしはまいあさぱん（ ）たべます。',
        romaji: 'Watashi wa maiasa pan ( ) tabemasu.',
        options: ['が/ga', 'に/ni', 'を/o', 'で/de'],
        correct: 'を/o',
        explanation: 'Use "を" to mark the direct object of an action. パンを食べます means "I eat bread."',
    },
    {
        question: 'これはわたし（ ）カバンです。',
        kana: 'これはわたし（ ）かばんです。',
        romaji: 'Kore wa watashi ( ) kaban desu.',
        options: ['が/ga', 'の/no', 'を/o', 'に/ni'],
        correct: 'の/no',
        explanation: 'Use "の" to show possession. わたしのかばん means "my bag."',
    },
    {
        question: 'きのう、テレビを（ ）。',
        kana: 'きのう、てれびを（ ）。',
        romaji: 'Kinou, terebi o ( ).',
        options: [
            '見ます/みます/mimasu',
            '見ました/みました/mimashita',
            '見ません/みません/mimasen',
            '見たいです/みたいです/mitaidesu'
        ],
        correct: '見ました/みました/mimashita',
        explanation: 'Use the past form "ました" because きのう means "yesterday." 見ました means "watched."',
    },
    {
        question: 'この料理はあまり（ ）。',
        kana: 'このりょうりはあまり（ ）。',
        romaji: 'Kono ryouri wa amari ( ).',
        options: [
            'おいしいです/oishii desu',
            'おいしくないです/oishiku nai desu',
            'おいしかったです/oishikatta desu',
            'おいしくて/oishikute'
        ],
        correct: 'おいしくないです/oishiku nai desu',
        explanation: 'あまり is commonly used with a negative expression. おいしくないです means "is not delicious."',
    },
    {
        question: 'わたしは日本語を（ ）ことが好きです。',
        kana: 'わたしはにほんごを（ ）ことがすきです。',
        romaji: 'Watashi wa nihongo o ( ) koto ga suki desu.',
        options: [
            '勉強する/べんきょうする/benkyou suru',
            '勉強します/べんきょうします/benkyou shimasu',
            '勉強して/べんきょうして/benkyou shite',
            '勉強した/べんきょうした/benkyou shita'
        ],
        correct: '勉強する/べんきょうする/benkyou suru',
        explanation: 'Use the dictionary form of a verb before "ことが好きです." 勉強することが好きです means "I like studying."',
    },
    {
        question: '部屋に犬が（ ）。',
        kana: 'へやにいぬが（ ）。',
        romaji: 'Heya ni inu ga ( ).',
        options: [
            'あります/arimasu',
            'います/imasu',
            'です/desu',
            'します/shimasu'
        ],
        correct: 'います/imasu',
        explanation: 'Use "います" for the existence of people and animals. Use "あります" for objects and plants.',
    },
    {
        question: '駅までバス（ ）行きます。',
        kana: 'えきまでばす（ ）いきます。',
        romaji: 'Eki made basu ( ) ikimasu.',
        options: ['に/ni', 'を/o', 'で/de', 'が/ga'],
        correct: 'で/de',
        explanation: 'Use "で" to indicate the means of transportation. バスで行きます means "go by bus."',
    },
    {
        question: 'わたしは昨日、学校へ（ ）。',
        kana: 'わたしはきのう、がっこうへ（ ）。',
        romaji: 'Watashi wa kinou, gakkou e ( ).',
        options: [
            '行きます/いきます/ikimasu',
            '行きません/いきません/ikimasen',
            '行きたいです/いきたいです/ikitaidesu',
            '行きませんでした/いきませんでした/ikimasen deshita'
        ],
        correct: '行きませんでした/いきませんでした/ikimasen deshita',
        explanation: 'Use "ませんでした" to express a negative action in the past. 行きませんでした means "did not go."',
    },
    {
        question: 'わたしは毎日6時（ ）家を出ます。',
        kana: 'わたしはまいにち6じ（ ）いえをでます。',
        romaji: 'Watashi wa mainichi 6-ji ( ) ie o demasu.',
        options: ['に/ni', 'で/de', 'を/o', 'が/ga'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate a specific time. 6時に means "at 6 o\'clock."',
    },
    {
        question: '机の上（ ）本があります。',
        kana: 'つくえのうえ（ ）ほんがあります。',
        romaji: 'Tsukue no ue ( ) hon ga arimasu.',
        options: ['を/o', 'に/ni', 'で/de', 'へ/e'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate the location where something exists. 机の上に means "on the desk."',
    },
    {
        question: 'わたしは兄（ ）二人います。',
        kana: 'わたしはあに（ ）ふたりいます。',
        romaji: 'Watashi wa ani ( ) futari imasu.',
        options: ['を/o', 'が/ga', 'に/ni', 'で/de'],
        correct: 'が/ga',
        explanation: 'Use "が" to identify the people or things that exist. 兄が二人います means "I have two older brothers."',
    },
    {
        question: '毎週土曜日（ ）テニスをします。',
        kana: 'まいしゅうどようび（ ）てにすをします。',
        romaji: 'Maishuu doyoubi ( ) tenisu o shimasu.',
        options: ['に/ni', 'を/o', 'が/ga', 'と/to'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate a specific day when an action takes place. 土曜日に means "on Saturday."',
    },
    {
        question: 'わたしは日本語（ ）英語を話します。',
        kana: 'わたしはにほんご（ ）えいごをはなします。',
        romaji: 'Watashi wa nihongo ( ) eigo o hanashimasu.',
        options: ['も/mo', 'と/to', 'で/de', 'に/ni'],
        correct: 'と/to',
        explanation: 'Use "と" to connect nouns meaning "and." 日本語と英語 means "Japanese and English."',
    },
    {
        question: 'このりんごは（ ）です。',
        kana: 'このりんごは（ ）です。',
        romaji: 'Kono ringo wa ( ) desu.',
        options: [
            'あまい/amai',
            'あまく/ amaku',
            'あまくて/amakute',
            'あまかった/amakatta'
        ],
        correct: 'あまい/amai',
        explanation: 'Use the plain form of an i-adjective before "です." あまいです means "is sweet."',
    },
    {
        question: 'きのうはとても（ ）です。',
        kana: 'きのうはとても（ ）です。',
        romaji: 'Kinou wa totemo ( ) desu.',
        options: [
            'さむい/samui',
            'さむかった/samukatta',
            'さむく/samuku',
            'さむくて/samukute'
        ],
        correct: 'さむかった/samukatta',
        explanation: 'Use the past form of an i-adjective to describe a past condition. さむかったです means "It was cold."',
    },
    {
        question: 'この町はあまり（ ）。',
        kana: 'このまちはあまり（ ）。',
        romaji: 'Kono machi wa amari ( ).',
        options: [
            'しずかです/shizuka desu',
            'しずかではありません/shizuka dewa arimasen',
            'しずかでした/shizuka deshita',
            'しずかになります/shizuka ni narimasu'
        ],
        correct: 'しずかではありません/shizuka dewa arimasen',
        explanation: 'Use "あまり" with a negative expression. しずかではありません means "is not quiet."',
    },
    {
        question: 'わたしの部屋は（ ）ありません。',
        kana: 'わたしのへやは（ ）ありません。',
        romaji: 'Watashi no heya wa ( ) arimasen.',
        options: [
            '広い/ひろい/hiroi',
            '広く/ひろく/hiroku',
            '広かった/ひろかった/hirokatta',
            '広くて/ひろくて/hirokute'
        ],
        correct: '広く/ひろく/hiroku',
        explanation: 'To make an i-adjective negative, change "い" to "く" and add "ありません." 広くありません means "is not spacious."',
    },
    {
        question: 'きのう、何（ ）食べましたか。',
        kana: 'きのう、なに（ ）たべましたか。',
        romaji: 'Kinou, nani ( ) tabemashita ka.',
        options: ['を/o', 'が/ga', 'に/ni', 'で/de'],
        correct: 'を/o',
        explanation: 'Use "を" to mark the direct object of the verb. 何を食べましたか means "What did you eat?"',
    },
    {
        question: '駅の前（ ）友達に会いました。',
        kana: 'えきのまえ（ ）ともだちにあいました。',
        romaji: 'Eki no mae ( ) tomodachi ni aimashita.',
        options: ['で/de', 'を/o', 'へ/e', 'が/ga'],
        correct: 'で/de',
        explanation: 'Use "で" to indicate where an action happens. 駅の前で means "in front of the station."',
    },
    {
        question: 'わたしは日本（ ）来ました。',
        kana: 'わたしはにほん（ ）きました。',
        romaji: 'Watashi wa Nihon ( ) kimashita.',
        options: ['から/kara', 'まで/made', 'より/yori', 'だけ/dake'],
        correct: 'から/kara',
        explanation: 'Use "から" to indicate a starting point or origin. 日本から来ました means "I came from Japan."',
    },
    {
        question: '学校は9時（ ）3時までです。',
        kana: 'がっこうは9じ（ ）3じまでです。',
        romaji: 'Gakkou wa 9-ji ( ) 3-ji made desu.',
        options: ['から/kara', 'まで/made', 'に/ni', 'で/de'],
        correct: 'から/kara',
        explanation: 'Use "から" for the starting point of a time period. 9時から3時まで means "from 9 to 3."',
    },
    {
        question: 'わたしはコーヒー（ ）飲みません。',
        kana: 'わたしはこーひー（ ）のみません。',
        romaji: 'Watashi wa koohii ( ) nomimasen.',
        options: ['は/wa', 'も/mo', 'を/o', 'で/de'],
        correct: 'を/o',
        explanation: 'Use "を" to mark the direct object of a verb. コーヒーを飲みません means "I do not drink coffee."',
    },
    {
        question: '日曜日は何（ ）しますか。',
        kana: 'にちようびはなに（ ）しますか。',
        romaji: 'Nichiyoubi wa nani ( ) shimasu ka.',
        options: ['を/o', 'が/ga', 'に/ni', 'で/de'],
        correct: 'を/o',
        explanation: 'Use "を" to mark the object of します. 何をしますか means "What will you do?"',
    },
    {
        question: 'わたしは毎晩、本を（ ）から寝ます。',
        kana: 'わたしはまいばん、ほんを（ ）からねます。',
        romaji: 'Watashi wa maiban, hon o ( ) kara nemasu.',
        options: [
            '読みます/よみます/yomimasu',
            '読んで/よんで/yonde',
            '読む/よむ/yomu',
            '読んだ/よんだ/yonda'
        ],
        correct: '読んで/よんで/yonde',
        explanation: 'Use the te-form before "から" in this sentence to show the order of actions. 読んでから寝ます means "I go to bed after reading."',
    },
    {
        question: 'ここに名前を（ ）ください。',
        kana: 'ここになまえを（ ）ください。',
        romaji: 'Koko ni namae o ( ) kudasai.',
        options: [
            '書きます/かきます/kakimasu',
            '書いて/かいて/kaite',
            '書く/かく/kaku',
            '書いた/かいた/kaita'
        ],
        correct: '書いて/かいて/kaite',
        explanation: 'Use the te-form with "ください" to make a polite request. 書いてください means "Please write."',
    },
    {
        question: 'わたしはまだ朝ごはんを（ ）。',
        kana: 'わたしはまだあさごはんを（ ）。',
        romaji: 'Watashi wa mada asagohan o ( ).',
        options: [
            '食べました/たべました/tabemashita',
            '食べません/たべません/tabemasen',
            '食べていません/たべていません/tabete imasen',
            '食べたいです/たべたいです/tabetai desu'
        ],
        correct: '食べていません/たべていません/tabete imasen',
        explanation: 'まだ with a negative expression means "not yet." 食べていません means "have not eaten yet."',
    },
    {
        question: 'あしたは雨が（ ）と思います。',
        kana: 'あしたはあめが（ ）とおもいます。',
        romaji: 'Ashita wa ame ga ( ) to omoimasu.',
        options: [
            '降ります/ふります/furimasu',
            '降る/ふる/furu',
            '降って/ふって/futte',
            '降りました/ふりました/furimashita'
        ],
        correct: '降る/ふる/furu',
        explanation: 'Use the plain form before "と思います." 降ると思います means "I think it will rain."',
    },
    {
        question: 'わたし（ ）学生です。',
        kana: 'わたし（ ）がくせいです。',
        romaji: 'Watashi ( ) gakusei desu.',
        options: ['は/wa', 'を/o', 'に/ni', 'で/de'],
        correct: 'は/wa',
        explanation: 'Use "は" to mark the topic of a sentence. わたしは学生です means "I am a student."',
    },
    {
        question: 'わたしは毎日コーヒーを飲みますが、お茶（ ）飲みます。',
        kana: 'わたしはまいにちこーひーをのみますが、おちゃ（ ）のみます。',
        romaji: 'Watashi wa mainichi koohii o nomimasu ga, ocha ( ) nomimasu.',
        options: ['も/mo', 'へ/e', 'から/kara', 'まで/made'],
        correct: 'も/mo',
        explanation: 'Use "も" to express "also" or "too." お茶も飲みます means "I also drink tea."',
    },
    {
        question: 'これはだれ（ ）かばんですか。',
        kana: 'これはだれ（ ）かばんですか。',
        romaji: 'Kore wa dare ( ) kaban desu ka.',
        options: ['の/no', 'に/ni', 'を/o', 'で/de'],
        correct: 'の/no',
        explanation: 'Use "の" to show possession. だれのかばん means "whose bag."',
    },
    {
        question: 'この本はわたし（ ）です。',
        kana: 'このほんはわたし（ ）です。',
        romaji: 'Kono hon wa watashi ( ) desu.',
        options: ['の/no', 'を/o', 'に/ni', 'が/ga'],
        correct: 'の/no',
        explanation: 'Use "の" to indicate ownership. わたしのです means "It is mine."',
    },
    {
        question: 'わたしは一人（ ）公園へ行きました。',
        kana: 'わたしはひとり（ ）こうえんへいきました。',
        romaji: 'Watashi wa hitori ( ) kouen e ikimashita.',
        options: ['で/de', 'に/ni', 'を/o', 'が/ga'],
        correct: 'で/de',
        explanation: 'Use "で" with 一人 to express doing something alone. 一人で means "by myself."',
    },
    {
        question: 'わたしは友達（ ）手紙を書きました。',
        kana: 'わたしはともだち（ ）てがみをかきました。',
        romaji: 'Watashi wa tomodachi ( ) tegami o kakimashita.',
        options: ['に/ni', 'を/o', 'で/de', 'が/ga'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate the recipient of an action. 友達に手紙を書きました means "I wrote a letter to my friend."',
    },
    {
        question: 'わたしは母（ ）プレゼントをあげました。',
        kana: 'わたしははは（ ）ぷれぜんとをあげました。',
        romaji: 'Watashi wa haha ( ) purezento o agemashita.',
        options: ['に/ni', 'を/o', 'で/de', 'が/ga'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate the person who receives something. 母にプレゼントをあげました means "I gave my mother a present."',
    },
    {
        question: 'わたしは先生（ ）本をもらいました。',
        kana: 'わたしはせんせい（ ）ほんをもらいました。',
        romaji: 'Watashi wa sensei ( ) hon o moraimashita.',
        options: ['に/ni', 'を/o', 'へ/e', 'で/de'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate the person from whom you receive something. 先生に本をもらいました means "I received a book from my teacher."',
    },
    {
        question: 'この電車は東京（ ）大阪まで行きます。',
        kana: 'このでんしゃはとうきょう（ ）おおさかまでいきます。',
        romaji: 'Kono densha wa Toukyou ( ) Oosaka made ikimasu.',
        options: ['から/kara', 'まで/made', 'に/ni', 'で/de'],
        correct: 'から/kara',
        explanation: 'Use "から" to indicate a starting point. 東京から大阪まで means "from Tokyo to Osaka."',
    },
    {
        question: 'わたしは毎朝7時（ ）8時まで勉強します。',
        kana: 'わたしはまいあさ7じ（ ）8じまでべんきょうします。',
        romaji: 'Watashi wa maiasa 7-ji ( ) 8-ji made benkyou shimasu.',
        options: ['から/kara', 'まで/made', 'に/ni', 'で/de'],
        correct: 'から/kara',
        explanation: 'Use "から" to indicate when an activity starts. 7時から8時まで means "from 7 to 8."',
    },
    {
        question: 'この店は何時（ ）開きますか。',
        kana: 'このみせはなんじ（ ）あきますか。',
        romaji: 'Kono mise wa nanji ( ) akimasu ka.',
        options: ['に/ni', 'を/o', 'で/de', 'が/ga'],
        correct: 'に/ni',
        explanation: 'Use "に" with a specific time. 何時に開きますか means "What time does it open?"',
    },
    {
        question: '夏（ ）冬とどちらが好きですか。',
        kana: 'なつ（ ）ふゆとどちらがすきですか。',
        romaji: 'Natsu ( ) fuyu to dochira ga suki desu ka.',
        options: ['と/to', 'や/ya', 'も/mo', 'から/kara'],
        correct: 'と/to',
        explanation: 'Use "と" to connect two items in a comparison. 夏と冬 means "summer and winter."',
    },
    {
        question: 'わたしは犬（ ）猫が好きです。',
        kana: 'わたしはいぬ（ ）ねこがすきです。',
        romaji: 'Watashi wa inu ( ) neko ga suki desu.',
        options: ['と/to', 'で/de', 'を/o', 'に/ni'],
        correct: 'と/to',
        explanation: 'Use "と" to connect two nouns. 犬と猫 means "dogs and cats."',
    },
    {
        question: 'わたしは日本の料理（ ）好きです。',
        kana: 'わたしはにほんのりょうり（ ）すきです。',
        romaji: 'Watashi wa Nihon no ryouri ( ) suki desu.',
        options: ['が/ga', 'を/o', 'に/ni', 'で/de'],
        correct: 'が/ga',
        explanation: 'Use "が" with 好きです to mark the thing you like. 料理が好きです means "I like cooking/food."',
    },
    {
        question: 'あなたはどこ（ ）住んでいますか。',
        kana: 'あなたはどこ（ ）すんでいますか。',
        romaji: 'Anata wa doko ( ) sunde imasu ka.',
        options: ['に/ni', 'を/o', 'が/ga', 'へ/e'],
        correct: 'に/ni',
        explanation: 'Use "に" to indicate where someone lives. どこに住んでいますか means "Where do you live?"',
    },
    {
        question: '毎日、何時に（ ）か。',
        kana: 'まいにち、なんじに（ ）か。',
        romaji: 'Mainichi, nanji ni ( ) ka.',
        options: [
            '寝ます/ねます/nemasu',
            '寝ました/ねました/nemashita',
            '寝ませんでした/ねませんでした/nemasen deshita',
            '寝たいです/ねたいです/netai desu'
        ],
        correct: '寝ます/ねます/nemasu',
        explanation: 'The question asks about a daily routine, so the present polite form 寝ます is appropriate.',
    },
    {
        question: 'あした、何を（ ）か。',
        kana: 'あした、なにを（ ）か。',
        romaji: 'Ashita, nani o ( ) ka.',
        options: [
            'します/shimasu',
            'しました/shimashita',
            'して/shite',
            'しませんでした/shimasen deshita'
        ],
        correct: 'します/shimasu',
        explanation: 'Use the polite present form "します" to ask about a future plan. あした、何をしますか means "What will you do tomorrow?"',
    },
    {
        question: 'わたしは昨日、友達と（ ）。',
        kana: 'わたしはきのう、ともだちと（ ）。',
        romaji: 'Watashi wa kinou, tomodachi to ( ).',
        options: [
            '遊びます/あそびます/asobimasu',
            '遊びました/あそびました/asobimashita',
            '遊びません/あそびません/asobimasen',
            '遊びたいです/あそびたいです/asobitai desu'
        ],
        correct: '遊びました/あそびました/asobimashita',
        explanation: 'Use the past form "ました" because 昨日 means "yesterday."',
    },
    {
        question: '毎朝、顔を（ ）から朝ごはんを食べます。',
        kana: 'まいあさ、かおを（ ）からあさごはんをたべます。',
        romaji: 'Maiasa, kao o ( ) kara asagohan o tabemasu.',
        options: [
            '洗います/あらいます/araimasu',
            '洗って/あらって/aratte',
            '洗う/あらう/arau',
            '洗った/あらった/aratta'
        ],
        correct: '洗って/あらって/aratte',
        explanation: 'Use the te-form before "から" to show the order of actions. 顔を洗ってから means "after washing my face."',
    },
    {
        question: '窓を（ ）ください。',
        kana: 'まどを（ ）ください。',
        romaji: 'Mado o ( ) kudasai.',
        options: [
            '開けます/あけます/akemasu',
            '開けて/あけて/akete',
            '開ける/あける/akeru',
            '開けた/あけた/aketa'
        ],
        correct: '開けて/あけて/akete',
        explanation: 'Use the te-form with "ください" to make a polite request. 開けてください means "Please open it."',
    },
    {
        question: 'ここに車を（ ）はいけません。',
        kana: 'ここにくるまを（ ）はいけません。',
        romaji: 'Koko ni kuruma o ( ) wa ikemasen.',
        options: [
            '止めます/とめます/tomemasu',
            '止めて/とめて/tomete',
            '止める/とめる/tomeru',
            '止めない/とめない/tomenai'
        ],
        correct: '止めて/とめて/tomete',
        explanation: 'Use the te-form with "はいけません" to express prohibition. 止めてはいけません means "You must not park here."',
    },
    {
        question: 'この部屋で食べ物を（ ）もいいですか。',
        kana: 'このへやでたべものを（ ）もいいですか。',
        romaji: 'Kono heya de tabemono o ( ) mo ii desu ka.',
        options: [
            '食べます/たべます/tabemasu',
            '食べて/たべて/tabete',
            '食べる/たべる/taberu',
            '食べた/たべた/tabeta'
        ],
        correct: '食べて/たべて/tabete',
        explanation: 'Use the te-form with "もいいですか" to ask permission. 食べてもいいですか means "May I eat?"',
    },
    {
        question: 'わたしはまだ宿題を（ ）。',
        kana: 'わたしはまだしゅくだいを（ ）。',
        romaji: 'Watashi wa mada shukudai o ( ).',
        options: [
            'しません/shimasen',
            'していません/shite imasen',
            'しました/shimashita',
            'したいです/shitai desu'
        ],
        correct: 'していません/shite imasen',
        explanation: 'まだ with a negative expression means "not yet." まだ宿題をしていません means "I have not done my homework yet."',
    },
    {
        question: '毎日、日本語を（ ）います。',
        kana: 'まいにち、にほんごを（ ）います。',
        romaji: 'Mainichi, nihongo o ( ) imasu.',
        options: [
            '勉強します/べんきょうします/benkyou shimasu',
            '勉強して/べんきょうして/benkyou shite',
            '勉強する/べんきょうする/benkyou suru',
            '勉強した/べんきょうした/benkyou shita'
        ],
        correct: '勉強して/べんきょうして/benkyou shite',
        explanation: 'Use the te-form with "います" to describe an ongoing or habitual action. 勉強しています means "I am studying."',
    },
    {
        question: 'わたしは日本語を話すことが（ ）。',
        kana: 'わたしはにほんごをはなすことが（ ）。',
        romaji: 'Watashi wa nihongo o hanasu koto ga ( ).',
        options: [
            'できます/dekimasu',
            'します/shimasu',
            'あります/arimasu',
            'います/imasu'
        ],
        correct: 'できます/dekimasu',
        explanation: 'Use "ことができます" to express ability. 話すことができます means "I can speak."',
    },
    {
        question: 'きょうは昨日（ ）暑いです。',
        kana: 'きょうはきのう（ ）あついです。',
        romaji: 'Kyou wa kinou ( ) atsui desu.',
        options: [
            'より/yori',
            'から/kara',
            'まで/made',
            'だけ/dake'
        ],
        correct: 'より/yori',
        explanation: 'Use "より" to indicate the standard of comparison. 昨日より暑い means "hotter than yesterday."',
    },
    {
        question: 'わたしは兄（ ）背が高いです。',
        kana: 'わたしはあに（ ）せがたかいです。',
        romaji: 'Watashi wa ani ( ) se ga takai desu.',
        options: [
            'より/yori',
            'まで/made',
            'から/kara',
            'だけ/dake'
        ],
        correct: 'より/yori',
        explanation: 'Use "より" to compare two things. 兄より背が高い means "taller than my older brother."',
    },
    {
        question: 'この中でだれ（ ）一番背が高いですか。',
        kana: 'このなかでだれ（ ）いちばんせがたかいですか。',
        romaji: 'Kono naka de dare ( ) ichiban se ga takai desu ka.',
        options: [
            'が/ga',
            'を/o',
            'に/ni',
            'で/de'
        ],
        correct: 'が/ga',
        explanation: 'Use "が" to identify the person being asked about. だれが一番 means "who is the most..."',
    },
    {
        question: 'わたしは水（ ）飲みません。',
        kana: 'わたしはみず（ ）のみません。',
        romaji: 'Watashi wa mizu ( ) nomimasen.',
        options: [
            'だけ/dake',
            'しか/shika',
            'でも/demo',
            'まで/made'
        ],
        correct: 'だけ/dake',
        explanation: '"だけ" means "only." 水だけ飲みません means "I drink only water" is not the intended meaning here, so this sentence should be read as "I do not drink only water."',
    },
    {
        question: '日曜日（ ）休みます。',
        kana: 'にちようび（ ）やすみます。',
        romaji: 'Nichiyoubi ( ) yasumimasu.',
        options: [
            'だけ/dake',
            'しか/shika',
            'でも/demo',
            'から/kara'
        ],
        correct: 'だけ/dake',
        explanation: '"だけ" means "only." 日曜日だけ休みます means "I take a day off only on Sunday."',
    },
    {
        question: 'コーヒー（ ）お茶を飲みます。',
        kana: 'こーひー（ ）おちゃをのみます。',
        romaji: 'Koohii ( ) ocha o nomimasu.',
        options: [
            'や/ya',
            'を/o',
            'に/ni',
            'が/ga'
        ],
        correct: 'や/ya',
        explanation: 'Use "や" to list examples of things. コーヒーやお茶 means "coffee, tea, and other things."',
    },
    {
        question: 'これは日本語（ ）書いた本です。',
        kana: 'これはにほんご（ ）かいたほんです。',
        romaji: 'Kore wa nihongo ( ) kaita hon desu.',
        options: [
            'で/de',
            'に/ni',
            'を/o',
            'が/ga'
        ],
        correct: 'で/de',
        explanation: 'Use "で" to indicate the language or means used. 日本語で書いた means "written in Japanese."',
    },
    {
        question: 'わたしは毎日、学校（ ）歩いて行きます。',
        kana: 'わたしはまいにち、がっこう（ ）あるいていきます。',
        romaji: 'Watashi wa mainichi, gakkou ( ) aruite ikimasu.',
        options: [
            'まで/made',
            'から/kara',
            'より/yori',
            'だけ/dake'
        ],
        correct: 'まで/made',
        explanation: 'Use "まで" to indicate a destination or endpoint. 学校まで means "as far as school."',
    },
    {
        question: 'わたしは日本に（ ）ことがあります。',
        kana: 'わたしはにほんに（ ）ことがあります。',
        romaji: 'Watashi wa Nihon ni ( ) koto ga arimasu.',
        options: [
            '行く/いく/iku',
            '行きます/いきます/ikimasu',
            '行って/いって/itte',
            '行った/いった/itta'
        ],
        correct: '行った/いった/itta',
        explanation: 'Use the past plain form with "ことがあります" to express experience. 行ったことがあります means "I have been to Japan."',
    },
    {
        question: 'わたしはまだ富士山を（ ）ことがありません。',
        kana: 'わたしはまだふじさんを（ ）ことがありません。',
        romaji: 'Watashi wa mada Fujisan o ( ) koto ga arimasen.',
        options: [
            '見ます/みます/mimasu',
            '見る/みる/miru',
            '見た/みた/mita',
            '見て/みて/mite'
        ],
        correct: '見た/みた/mita',
        explanation: 'Use the past plain form with "ことがありません" to express that you have never done something. 見たことがありません means "I have never seen it."',
    },
    {
        question: 'あしたは早く（ ）つもりです。',
        kana: 'あしたははやく（ ）つもりです。',
        romaji: 'Ashita wa hayaku ( ) tsumori desu.',
        options: [
            '起きます/おきます/okimasu',
            '起きる/おきる/okiru',
            '起きて/おきて/okite',
            '起きた/おきた/okita'
        ],
        correct: '起きる/おきる/okiru',
        explanation: 'Use the dictionary form before "つもりです" to express an intention. 起きるつもりです means "I intend to wake up."',
    },
    {
        question: 'わたしは日本へ（ ）に行きます。',
        kana: 'わたしはにほんへ（ ）にいきます。',
        romaji: 'Watashi wa Nihon e ( ) ni ikimasu.',
        options: [
            '旅行します/りょこうします/ryokou shimasu',
            '旅行/りょこう/ryokou',
            '旅行して/りょこうして/ryokou shite',
            '旅行した/りょこうした/ryokou shita'
        ],
        correct: '旅行/りょこう/ryokou',
        explanation: 'Use a noun or verb stem before "に行きます" to express the purpose of going somewhere. 旅行に行きます means "go on a trip."',
    },
    {
        question: 'りんごがいくつ（ ）か。',
        kana: 'りんごがいくつ（ ）か。',
        romaji: 'Ringo ga ikutsu ( ) ka.',
        options: [
            'あります/arimasu',
            'います/imasu',
            'します/shimasu',
            'です/desu'
        ],
        correct: 'あります/arimasu',
        explanation: 'Use "あります" for the existence of things. りんごがいくつありますか means "How many apples are there?"',
    },
    {
        question: '教室に学生が何人（ ）か。',
        kana: 'きょうしつにがくせいがなんにん（ ）か。',
        romaji: 'Kyoushitsu ni gakusei ga nannin ( ) ka.',
        options: [
            'います/imasu',
            'あります/arimasu',
            'します/shimasu',
            'なります/narimasu'
        ],
        correct: 'います/imasu',
        explanation: 'Use "います" for people and animals. 何人いますか means "How many people are there?"',
    },
    {
        question: 'あの人は（ ）ですか。',
        kana: 'あのひとは（ ）ですか。',
        romaji: 'Ano hito wa ( ) desu ka.',
        options: [
            'だれ/dare',
            'どこ/doko',
            'いつ/itsu',
            'いくつ/ikutsu'
        ],
        correct: 'だれ/dare',
        explanation: 'だれ means "who." あの人はだれですか means "Who is that person?"',
    },
    {
        question: 'あなたの誕生日は（ ）ですか。',
        kana: 'あなたのたんじょうびは（ ）ですか。',
        romaji: 'Anata no tanjoubi wa ( ) desu ka.',
        options: [
            'いつ/itsu',
            'どこ/doko',
            'だれ/dare',
            'どう/dou'
        ],
        correct: 'いつ/itsu',
        explanation: 'いつ means "when." いつですか asks about a date or time.',
    },
    {
        question: 'あなたの家は（ ）ですか。',
        kana: 'あなたのいえは（ ）ですか。',
        romaji: 'Anata no ie wa ( ) desu ka.',
        options: [
            'どこ/doko',
            'いつ/itsu',
            'だれ/dare',
            'なに/nani'
        ],
        correct: 'どこ/doko',
        explanation: 'どこ means "where." どこですか asks about a location.',
    },
    {
        question: 'これは（ ）の本ですか。',
        kana: 'これは（ ）のほんですか。',
        romaji: 'Kore wa ( ) no hon desu ka.',
        options: [
            'だれ/dare',
            'いつ/itsu',
            'どこ/doko',
            'どう/dou'
        ],
        correct: 'だれ/dare',
        explanation: 'だれの means "whose." だれの本ですか means "Whose book is this?"',
    },
    {
        question: '日本語の勉強は（ ）ですか。',
        kana: 'にほんごのべんきょうは（ ）ですか。',
        romaji: 'Nihongo no benkyou wa ( ) desu ka.',
        options: [
            'どう/dou',
            'どこ/doko',
            'いつ/itsu',
            'だれ/dare'
        ],
        correct: 'どう/dou',
        explanation: 'どう means "how." どうですか asks for an opinion or impression.',
    },
    {
        question: 'きょうはとても（ ）天気です。',
        kana: 'きょうはとても（ ）てんきです。',
        romaji: 'Kyou wa totemo ( ) tenki desu.',
        options: [
            'いい/ii',
            'よく/yoku',
            'よかった/yokatta',
            'よくて/yokute'
        ],
        correct: 'いい/ii',
        explanation: 'Use the basic form いい before a noun. いい天気 means "good weather."',
    },
    {
        question: 'きのうは天気が（ ）です。',
        kana: 'きのうはてんきが（ ）です。',
        romaji: 'Kinou wa tenki ga ( ) desu.',
        options: [
            'よかった/yokatta',
            'いい/ii',
            'よく/yoku',
            'よくて/yokute'
        ],
        correct: 'よかった/yokatta',
        explanation: 'The past form of いい is よかった. It means "was good."',
    },
    {
        question: 'この部屋はあまり（ ）ありません。',
        kana: 'このへやはあまり（ ）ありません。',
        romaji: 'Kono heya wa amari ( ) arimasen.',
        options: [
            'きれいでは/kirei dewa',
            'きれいな/kirei na',
            'きれいに/kirei ni',
            'きれいで/kirei de'
        ],
        correct: 'きれいでは/kirei dewa',
        explanation: 'Use "ではありません" to make a na-adjective negative. きれいではありません means "is not clean."',
    },
    {
        question: 'わたしの町はとても（ ）です。',
        kana: 'わたしのまちはとても（ ）です。',
        romaji: 'Watashi no machi wa totemo ( ) desu.',
        options: [
            'にぎやか/nigiyaka',
            'にぎやかに/nigiyaka ni',
            'にぎやかで/nigiyaka de',
            'にぎやかな/nigiyaka na'
        ],
        correct: 'にぎやか/nigiyaka',
        explanation: 'Use a na-adjective in its basic form before "です." にぎやかです means "is lively."',
    },
    {
        question: 'このかばんは（ ）です。',
        kana: 'このかばんは（ ）です。',
        romaji: 'Kono kaban wa ( ) desu.',
        options: [
            '重い/おもい/omoi',
            '重く/おもく/omoku',
            '重かった/おもかった/omokatta',
            '重くて/おもくて/omokute'
        ],
        correct: '重い/おもい/omoi',
        explanation: 'Use the basic form of an i-adjective before "です." 重いです means "is heavy."',
    },
    {
        question: 'このかばんは（ ）ありません。',
        kana: 'このかばんは（ ）ありません。',
        romaji: 'Kono kaban wa ( ) arimasen.',
        options: [
            '重く/おもく/omoku',
            '重い/おもい/omoi',
            '重かった/おもかった/omokatta',
            '重くて/おもくて/omokute'
        ],
        correct: '重く/おもく/omoku',
        explanation: 'Change the final "い" of an i-adjective to "く" before "ありません" to make it negative. 重くありません means "is not heavy."',
    },
    {
        question: 'わたしは昨日、友達に（ ）。',
        kana: 'わたしはきのう、ともだちに（ ）。',
        romaji: 'Watashi wa kinou, tomodachi ni ( ).',
        options: [
            '会います/あいます/aimasu',
            '会いました/あいました/aimashita',
            '会いません/あいません/aimasen',
            '会いたいです/あいたいです/aitai desu'
        ],
        correct: '会いました/あいました/aimashita',
        explanation: 'Use the past form "ました" because 昨日 means "yesterday."',
    },
    {
        question: '毎朝、音楽を（ ）ながら勉強します。',
        kana: 'まいあさ、おんがくを（ ）ながらべんきょうします。',
        romaji: 'Maiasa, ongaku o ( ) nagara benkyou shimasu.',
        options: [
            '聞きます/ききます/kikimasu',
            '聞いて/きいて/kiite',
            '聞く/きく/kiku',
            '聞いた/きいた/kiita'
        ],
        correct: '聞きます/ききます/kikimasu',
        explanation: 'The expression "ながら" connects two simultaneous actions. The verb before it uses the masu-stem: 聞きながら means "while listening."',
    },
    {
        question: '日曜日は家で（ ）います。',
        kana: 'にちようびはいえで（ ）います。',
        romaji: 'Nichiyoubi wa ie de ( ) imasu.',
        options: [
            '休んで/やすんで/yasunde',
            '休みます/やすみます/yasumimasu',
            '休む/やすむ/yasumu',
            '休んだ/やすんだ/yasunda'
        ],
        correct: '休んで/やすんで/yasunde',
        explanation: 'Use the te-form with "います" to describe an ongoing state or activity. 休んでいます means "I am resting."',
    },
    {
        question: 'あしたは雨が降る（ ）しれません。',
        kana: 'あしたはあめがふる（ ）しれません。',
        romaji: 'Ashita wa ame ga furu ( ) shiremasen.',
        options: [
            'かも/kamo',
            'から/kara',
            'まで/made',
            'だけ/dake'
        ],
        correct: 'かも/kamo',
        explanation: 'The expression "かもしれません" means "might" or "may." 降るかもしれません means "It might rain."',
    },
    {
        question: 'この漢字を（ ）ください。',
        kana: 'このかんじを（ ）ください。',
        romaji: 'Kono kanji o ( ) kudasai.',
        options: [
            '読んで/よんで/yonde',
            '読みます/よみます/yomimasu',
            '読む/よむ/yomu',
            '読んだ/よんだ/yonda'
        ],
        correct: '読んで/よんで/yonde',
        explanation: 'Use the te-form with "ください" to make a polite request. 読んでください means "Please read."',
    },
    {
        question: 'この本は（ ）ですか。',
        kana: 'このほんは（ ）ですか。',
        romaji: 'Kono hon wa ( ) desu ka.',
        options: [
            'いくら/ikura',
            'いつ/itsu',
            'どこ/doko',
            'だれ/dare'
        ],
        correct: 'いくら/ikura',
        explanation: 'いくら means "how much." この本はいくらですか means "How much is this book?"',
    },
    {
        question: '駅まで（ ）かかりますか。',
        kana: 'えきまで（ ）かかりますか。',
        romaji: 'Eki made ( ) kakarimasu ka.',
        options: [
            'どのくらい/dono kurai',
            'だれ/dare',
            'どこ/doko',
            'なに/nani'
        ],
        correct: 'どのくらい/dono kurai',
        explanation: 'どのくらい asks about an amount or duration. 駅までどのくらいかかりますか means "How long does it take to the station?"',
    },
    {
        question: 'わたしは日本語が少し（ ）。',
        kana: 'わたしはにほんごがすこし（ ）。',
        romaji: 'Watashi wa nihongo ga sukoshi ( ).',
        options: [
            'わかります/wakarimasu',
            'あります/arimasu',
            'います/imasu',
            'します/shimasu'
        ],
        correct: 'わかります/wakarimasu',
        explanation: 'わかります means "understand." 少しわかります means "I understand a little."',
    },
];
