import {hourIntro, paschalPraise1 , copticGospelIntro , cross} from "../repeatedPrayers";

export const DOS9 = () => {
    const hourIntroHtml = hourIntro("NINTH","التاسعة","DAY of Palm Sunday","يوم أحد الشعانين");

    const paschalPraiseHtml = paschalPraise1("4","5","6","NINTH","التاسعة","DAY of Palm Sunday","يوم أحد الشعانين");
    const copticGospelIntroHtml = copticGospelIntro("8");


return `
    
${hourIntroHtml}

<div class="section" id="section_2" title="Coptic Prophecies">
    <table id="table_2" title="Coptic Prophecies">
        <caption class="caption" id="caption_table_2">Coptic Prophecies
        <span class="arabic-caption">النبوات قبطي</span></caption>

        <tr id="table_2_row_3" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ ̀ⲑⲣⲓⲛⲟⲓ ̀ⲛⲧⲉ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ
                (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):</td>
        </tr>
        <tr id="table_2_row_4" class="text">
            <td class="coptic">Ⲁⲥϣⲱⲡⲓ ⲇⲉ ⲙⲉⲛⲉⲛⲥⲁ ̀ⲑⲣⲟⲩⲉⲣ ̀ⲭⲙⲁⲗⲱⲧⲉⲩⲓⲛ ̀ⲙⲡⲓⲒ̅ⲥ̅ⲗ ⲟⲩⲟϩ ̀Ⲓ̅ⲗ̅ⲏ̅ⲙ ̀ⲛⲧⲟⲩϣⲟⲣⲥ ⲁϥϩⲉⲙⲥⲓ
                ̀ⲛϫⲉ Ⲓⲉⲣⲉⲙⲓⲁⲥ ⲁϥⲣⲓⲙⲓ ⲟⲩⲟϩ ⲁϥⲉⲣϩⲏⲃ ̀ⲙⲡⲁⲓ ϩⲏⲃⲓ ̀ⲉϫⲉⲛ ̀Ⲓ̅ⲗ̅ⲏ̅ⲙ ⲟⲩⲟϩ ⲡⲉϫⲉϥ ϫⲉ Ⲡⲱⲥⲁⲥ ϩⲉⲙⲥⲓ ̀ⲙⲙⲁⲩⲁⲧⲥ
                ̀ⲛϫⲉ ϯⲃⲁⲕⲓ ⲑⲏⲉⲧⲟϣ ̀ⲙⲙⲏϣ ̀ⲉⲁⲥⲉⲣ ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩⲭⲏⲣⲁ ⲑⲏⲉⲧⲟϣ ϧⲉⲛ ⲛⲓⲉⲑⲛⲟⲥ ⲑⲏⲉⲧⲟⲓ ̀ⲛⲁⲣⲭⲱⲛ ̀ⲉⲛⲓⲭⲱⲣⲁ
                ⲁⲥϣⲱⲡⲓ ⲉⲩϩⲱϯ.</td>
        </tr>
        <tr id="table_2_row_5" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ...</td>
        </tr>
        <tr id="table_2_row_6" class="intro">
            <td class="coptic">Ⲉⲃⲟⲗϧⲉⲛ Ⲥⲟⲫⲟⲛⲓⲁⲥ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ: ̀ⲉⲣⲉⲡⲉϥ̀ⲥⲙⲟⲩ ̀ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ̀ⲁⲙⲏⲛ (ⲉϥϫⲱ ̀ⲙⲙⲟⲥ):
            </td>
        </tr>
        <tr id="table_2_row_7" class="text">
            <td class="coptic">Ⲛⲁⲓ ⲛⲏ̀ⲉⲧⲉ ̀Ⲡϭⲟⲓⲥ ϫⲱ ̀ⲙⲙⲟⲥ : ϫⲉ ϧⲉⲛ ⲡⲓⲥⲏⲟⲩ ̀ⲉⲧⲉ̀ⲙⲙⲁⲩ ϯⲛⲁ̀ⲱⲗⲓ ̀ⲉⲃⲟⲗϩⲁⲣⲟ
                ̀ⲛⲛⲓⲙⲉⲧⲣⲉϥϯϣⲱϣ ̀ⲛⲧⲉ ⲡⲉϣⲱϣ : ⲟⲩⲟϩ ̀ⲛⲛⲉⲟⲩⲁϩ ⲧⲟϯ ϫⲉ ̀ⲉϫⲉ ⲙⲉⲧϧⲉⲣⲟⲩⲱ ̀ⲉϫⲉⲛ ⲡⲁⲧⲱⲟⲩ ⲉ̅ⲑ̅ⲩ.</td>
        </tr>
        <tr id="table_2_row_8" class="intro">
            <td class="coptic">Ⲟⲩ̀ⲱⲟⲩ ̀ⲛϯ̀ⲧⲣⲓⲁⲥ ̀ⲉⲑⲟⲩⲁⲃ ⲡⲉⲛⲛⲟⲩϯ ϣⲁ ̀ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ̀ⲛⲧⲉ ⲛⲓ̀ⲉⲛⲉϩ ⲧⲏⲣⲟⲩ:
                ̀ⲁⲙⲏⲛ.</td>
        </tr>
    </table>
</div>
<div class="section" id="section_3" title="Prophecies">
    <title class="sectionTitle">Prophecies</title>
    <table id="table_3" title="1st Prophecy - Lamentations">
        <caption class="caption" id="caption_table_3">1st Prophecy<br>(Lamentations 1:1-4)
        <span class="arabic-caption">النبوة الأولي<br>(مراثي ارميا 1:1-4)</span></caption>
        <tr id="table_3_row_0" class="Inro">
            <td class="english">A reading from the Lamentations of Jeremiah the prophet. May his blessings be with us. Amen.</td>
            <td class="arabic">من مراثي أرميا النبي، بركته تكون معنا أمين.</td>
        </tr>
        <tr id="table_3_row_1" class="text">
            <td class="english">It came to pass after the captivity of Israel and the destruction of Jerusalem that Jeremiah wept on Jerusalem and said: How lonely sits the city That was full of people! How like a widow is she, Who was great among the nations! The princess among the provinces Has become a slave!</td>
            <td class="arabic">وكان بعد سبى إسرائيل وخراب أورشليم. أن أرميا جلس باكياً وناح على أورشليم بهذا النوح وقال: "كَيْفَ جَلَسَتْ وَحْدَهَا الْمَدِينَةُ الْكَثِيرَةُ الشَّعْبِ؟ كَيْفَ صَارَتْ كَأَرْمَلَةٍ الْعَظِيمَةُ فِي الأُمَمِ؟ السَّيِّدَةُ في الْبُلْدَانِ صَارَتْ تَحْتَ الْجِزْيَةِ!</td>
        </tr>
        <tr id="table_3_row_2" class="text">
            <td class="english">She weeps bitterly in the night, Her tears are on her cheeks; Among all her lovers She has none to comfort her. All her friends have dealt treacherously with her; They have become her enemies.</td>
            <td class="arabic">تَبْكِي في اللَّيْلِ بُكَاءً وَدُمُوعُهَا علَى خَدَّيْهَا. لَيْسَ لَهَا مُعَزٍّ مِن كُلِّ مُحِبِّيهَا. كُلُّ أَصْحَابِهَا غَدَرُوا بِهَا. صَارُوا لهَا أَعْدَاءً.</td>
        </tr>
        <tr id="table_3_row_3" class="text">
            <td class="english">Judah has gone into captivity, Under affliction and hard servitude; She dwells among the nations, She finds no rest; All her persecutors overtake her in dire straits.</td>
            <td class="arabic">قَد سُبِيَتْ يَهُوذَا مِنَ الْمَذَلَّةِ وَمِنْ كَثْرَةِ الْعُبُودِيَّةِ. هِيَ تَسْكُنُ بَيْنَ الأُمَمِ. لاَ تَجِدُ رَاحَةً. قَدْ أَدْرَكَهَا كُلُّ طَارِدِيهَا بَيْنَ الضِّيقَاتِ.</td>
        </tr>
        <tr id="table_3_row_4" class="text">
            <td class="english">The roads to Zion mourn Because no one comes to the set feasts. All her gates are desolate; Her priests sigh, Her virgins are afflicted, And she is in bitterness.</td>
            <td class="arabic">طُرُقُ صِهْيَوْنَ نَائِحَةٌ لِعَدَمِ الآتِينَ إِلَى الْعِيدِ. كُلُّ أَبْوَابِهَا خَرِبَةٌ. كَهَنَتُهَا يَتَنَهَّدُونَ. عَذَارَاهَا مُذَلَّلَةٌ وَهِيَ فِي مَرَارَةٍ.</td>
        </tr>
        <tr id="table_3_row_5" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>

    <table id="table_4" title="2nd Prophecy - Zephaniah">
        <caption class="caption" id="caption_table_4">2nd Prophecy<br>(Zephaniah 3:11-20)
        <span class="arabic-caption">النبوة الثانية<br>(صفنيا 3:11-20)</span></caption>
        </caption>
        <tr id="table_4_row_0" class="Inro">
            <td class="english">A reading from Zephaniah the Prophet. May his blessing be with us, Amen.</td>
            <td class="copticReadings">Ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲥⲟⲫⲟⲛⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ: ⲉ̀ⲣⲉⲡⲉϥⲥ̀ⲙⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ.</td>
            <td class="arabic">من صفنيا النبى بركته تكون معنا، آمين.</td>
        </tr>
        <tr id="table_4_row_1" class="text">
            <td class="english">The Lord says: “In that day you shall not be shamed for any of your deeds In which you transgress against Me; For then I will take away from your midst Those who rejoice in your pride, And you shall no longer be haughty In My holy mountain.</td>
            <td class="arabic"> يقول الرب: "فِي ذَلِكَ الْيَوْمِ لاَ تَخْزِينَ مِنْ كُلِّ أَعْمَالِكِ الَّتِي تَعَدَّيْتِ بِهَا عَلَيَّ. لأَنِّي حِينَئِذٍ أَنْزِعُ مِنْ وَسَطِكِ مُبْتَهِجِي كِبْرِيَائِكِ، وَلَنْ تَعُودِي بَعْدُ إِلَى التَّكَبُّرِ فِي جَبَلِ قُدْسِي.</td>
        </tr>
        <tr id="table_4_row_2" class="text">
            <td class="english">I will leave in your midst A meek and humble people, and they shall trust in the name of the Lord. </td>
            <td class="arabic">وَأُبْقِي فِي وَسَطِكِ شَعْباً بَائِساً وَمِسْكِيناً، فَيَتَوَكَّلُونَ عَلَى اسْمِ الرَّبِّ.</td>
        </tr>
        <tr id="table_4_row_3" class="text">
            <td class="english">The remnant of Israel shall do no unrighteousness And speak no lies, Nor shall a deceitful tongue be found in their mouth; For they shall feed their flocks and lie down, And no one shall make them afraid.” </td>
            <td class="arabic">بَقِيَّةُ إِسْرَائِيلَ لاَ يَفْعَلُونَ إِثْماً وَلاَ يَتَكَلَّمُونَ بِالْكَذِبِ وَلاَ يُوجَدُ فِي أَفْوَاهِهِمْ لِسَانُ غِشٍّ، لأَنَّهُمْ يَرْعُونَ وَيَرْبُضُونَ وَلاَ مُخِيفَ]. </td>
        </tr>
        <tr id="table_4_row_4" class="text">
            <td class="english">Sing, O daughter of Zion! Shout, O Israel! Be glad and rejoice with all your heart, O daughter of Jerusalem!</td>
            <td class="arabic">تَرَنَّمِي يَا ابْنَةَ صِهْيَوْنَ. اهْتِفْ يَا إِسْرَائِيلُ. افْرَحِي وَابْتَهِجِي بِكُلِّ قَلْبِكِ يَا ابْنَةَ أُورُشَلِيمَ.</td>
        </tr>
        <tr id="table_4_row_5" class="text">
            <td class="english">The Lord has taken away your judgments, He has cast out your enemy. The King of Israel, the Lord, is in your midst; You shall see disaster no more.</td>
            <td class="arabic">قَدْ نَزَعَ الرَّبُّ الأَقْضِيَةَ عَلَيْكِ. أَزَالَ عَدُوَّكِ. مَلِكُ إِسْرَائِيلَ الرَّبُّ فِي وَسَطِكِ. لاَ تَنْظُرِينَ بَعْدُ شَرّاً.</td>
        </tr>
        <tr id="table_4_row_6" class="text">
            <td class="english">In that day it shall be said to Jerusalem: “Do not fear; Zion, let not your hands be weak.</td>
            <td class="arabic">فِي ذَلِكَ الْيَوْمِ يُقَالُ ﻻورُشَلِيمَ: [لاَ تَخَافِي يَا صِهْيَوْنُ. لاَ تَرْتَخِ يَدَاكِ.</td>
        </tr>
        <tr id="table_4_row_7" class="text">
            <td class="english">The Lord your God in your midst, The Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing.” </td>
            <td class="arabic">الرَّبُّ إِلَهُكِ فِي وَسَطِكِ جَبَّارٌ يُخَلِّصُ. يَبْتَهِجُ بِكِ فَرَحاً. يَسْكُتُ فِي مَحَبَّتِهِ. يَبْتَهِجُ بِكِ بِتَرَنُّمٍ].</td>
        </tr>
        <tr id="table_4_row_8" class="text">
            <td class="english">“I will gather those who sorrow over the appointed assembly, Who are among you, To whom its reproach is a burden. </td>
            <td class="arabic">[أَجْمَعُ الْمَحْزُونِينَ عَلَى الْمَوْسِمِ. كَانُوا مِنْكِ. حَامِلِينَ عَلَيْهَا الْعَارَ.</td>
        </tr>
        <tr id="table_4_row_9" class="text">
            <td class="english">Behold, at that time I will deal with all who afflict you; I will save the lame, And gather those who were driven out; I will appoint them for praise and fame In every land where they were put to shame.</td>
            <td class="arabic">هَئَنَذَا فِي ذَلِكَ الْيَوْمِ أُعَامِلُ كُلَّ مُذَلِّلِيكِ، وَأُخَلِّصُ الظَّالِعَةَ، وَأَجْمَعُ الْمَنْفِيَّةَ، وَأَجْعَلُهُمْ تَسْبِيحَةً وَاسْماً فِي كُلِّ أَرْضِ خِزْيِهِمْ،</td>
        </tr>
        <tr id="table_4_row_10" class="text">
            <td class="english">At that time I will bring you back, Even at the time I gather you; For I will give you fame and praise Among all the peoples of the earth, When I return your captives before your eyes,” Says the Lord.</td>
            <td class="arabic">فِي الْوَقْتِ الَّذِي فِيهِ آتِي بِكُمْ وَفِي وَقْتِ جَمْعِي إِيَّاكُمْ. لأَنِّي أُصَيِّرُكُمُ اسْماً وَتَسْبِيحَةً فِي شُعُوبِ الأَرْضِ كُلِّهَا، حِينَ أَرُدُّ مَسْبِيِّيكُمْ قُدَّامَ أَعْيُنِكُمْ]. قَالَ الرَّبُّ.</td>
        </tr>                
        <tr id="table_4_row_11" class="intro">
            <td class="english">Glory be to the Holy Trinity, our God, forever and unto the age of all ages. Amen.</td>
            <td class="arabic">مجداً للثالوث القدوس الهنا إلى الأبد وإلى أبد الآبدين كلها، آمين.</td>
        </tr>
    </table>
</div>

${paschalPraiseHtml}

<div class="section" id="section_5" title="Coptic Psalm & Gospel">
    <table id="table_7" title="Coptic Psalm">
        <caption class="caption" id="caption_table_7">Coptic Psalm<br>(8:2,1)
        <span class="arabic-caption">المزمور قبطي<br>(8: 2-1)</span></caption>
        <tr id="table_7_row_0" class="intro">
            <td class="english">A psalm David</td>
            <td class="coptic">Ⲯⲁⲗⲙⲟⲥ ⲧⲱ Ⲇⲁⲩⲓⲇ</td>
            <td class="arabic">مزمور لداود</td>
        </tr>
        <tr id="table_7_row_1" class="text">
            <td class="english">Out of the mouth of babes and nursing infants You have ordained strength, O
                Lord, our Lord, How excellent is Your name in all the earth. Alleluia</td>
            <td class="coptic">̀Ⲉⲃⲟⲗϧⲉⲛ ⲣⲱⲟⲩ ̀ⲛϩⲁⲛⲕⲟⲩϫⲓ ̀ⲛ̀ⲁⲗⲱⲟⲩ̀ⲓ : ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲉⲙϭⲓ ⲁⲕⲥⲉⲃⲧⲉ ⲡⲓ̀ⲥⲙⲟⲩ : ̀Ⲡ⳪ ⲡⲉⲛ⳪
                ̀ⲙ̀ⲫⲣⲏϯ ̀ⲛⲟⲩ ̀ϣⲫⲏⲣⲓ : ⲁϥϣⲱⲡⲓ ̀ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ ϩⲓϫⲉⲛ ̀ⲡⲕⲁϩⲓ ⲧⲏⲣϥ. ̅ⲁ̅ⲗ.</td>
            <td class="arabic">من أفواه الاطفال والرضعان هيأت سبحاً. أيها الرب ربنا مثل عجب صار اسمك على الأرض
                كلها. الليلويا.</td>
        </tr>
    </table>
    ${copticGospelIntroHtml}
    <table id="table_9" title="Coptic Gospel">
        <caption class="caption" id="caption_table_9">Coptic Gospel<br>(Matthew 21:10-17)
        <span class="arabic-caption">الأنجيل قبطي<br>(متى 21: 10-17)</span></caption>
        <tr id="table_9_row_0" class="priest">
            <td class="english">A chapter according to Saint Mathew,</td>
            <td class="coptic">Ⲟⲩⲁⲛⲁⲅⲛⲱⲥⲓⲥ ̀ⲉⲃⲟⲗ ϧⲉⲛ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲕⲁⲧⲁ Ⲙⲁⲧⲑⲉⲱⲛ ⲁⲅⲓⲟⲩ.</td>
            <td class="arabic">فصل من إنجيل معلمنا مار متى</td>
        </tr>
        <tr id="table_41_row_1" class="intro">
            <td class="english">Glory be to God forever.</td>
            <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
        <tr id="table_9_row_2" class="text">
            <td class="coptic">Ⲟⲩⲟϩ ̀ⲉⲧⲁϥ̀ⲓ ̀ⲉϧⲟⲩⲛ ̀ⲉⲒ̅ⲗ̅ⲏ̅ⲙ ⲁⲥⲙⲟⲛⲙⲉⲛ ̀ⲛϫⲉ ϯⲃⲁⲕⲓ ⲧⲏⲣⲥ ⲉⲩϫⲱ ̀ⲙⲙⲟⲥ ϫⲉ ⲛⲓⲙ ⲡⲉ ⲫⲁⲓ.
                Ⲛⲓⲙⲏϣ ⲇⲉ ⲛⲁⲩϫⲱ ̀ⲙⲙⲟⲥ ϫⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ Ⲓ̅ⲏ̅ⲥ ⲡⲓⲣⲉⲙⲛⲁⲍⲁⲣⲉⲑ ̀ⲛⲧⲉϯⲅⲁⲗⲓⲗⲓ̀ⲁ : 
            </td>
        </tr>
        <tr id="table_9_row_3" class="text">
            <td class="coptic">
                Ⲛⲓⲙⲏϣ ⲇⲉ ⲛⲁⲩϫⲱ ̀ⲙⲙⲟⲥ ϫⲉ ⲫⲁⲓ ⲡⲉ ⲡⲓ̀ⲡⲣⲟⲫⲏⲧⲏⲥ Ⲓ̅ⲏ̅ⲥ ⲡⲓⲣⲉⲙⲛⲁⲍⲁⲣⲉⲑ ̀ⲛⲧⲉϯⲅⲁⲗⲓⲗⲓ̀ⲁ :
            </td>
        </tr>
        <tr id="table_9_row_4" class="text">
            <td class="coptic">
                Ⲟⲩⲟϩ ⲁϥϣⲉⲛⲁϥ ̀ⲛϫⲉ Ⲓⲏⲥ ⲉϧⲟⲩⲛ ̀ⲉⲡⲓⲉⲣⲫⲉⲓ ⲟⲩⲟϩ ⲁϥϩⲓⲟⲩ̀ⲓ ̀ⲉⲃⲟⲗ ̀ⲛⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϯ ̀ⲉⲃⲟⲗϧⲉⲛ ⲡⲓⲉⲣⲫⲉⲓ ⲛⲉⲙ ⲛⲏⲉⲧϣⲱⲡ ⲟⲩⲟϩ ̀ⲛⲧⲣⲁⲡⲉⲍⲁ ̀ⲛⲧⲉ ⲛⲓⲣⲉϥ ⲉⲣⲕⲉⲣⲙⲁ ⲁϥⲫⲟⲛϫⲟⲩ ⲛⲉⲙ ⲛⲓⲕⲁⲑⲉⲇⲣⲁ ̀ⲛⲧⲉ ̀ⲛⲏⲉⲧ ϯϭⲣⲟⲙⲡⲓ ⲉⲃⲟⲗ.
            </td>
        </tr>
        <tr id="table_9_row_5" class="text">
            <td class="coptic">
                Ⲟⲩⲱϣⲧ ̀ⲙⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉⲑ̅ⲩ̅ 
            </td>
        </tr>
        <tr id="table_9_row_6" class="intro">
        <td class="english">Glory be to God forever.</td>
        <td class="coptic">Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓ̀ⲉ</td>
        <td class="arabic">والمجد لله دائما.</td>
    </tr>
    </table>
</div>
<div class="section" id="section_7" title="Engligh and Arabic Psalm & Gospel">
    <table id="table_10" title="Psalm & Gospel">
        <caption class="caption" id="caption_table_10">Psalm & Gospel</caption>
        <tr id="table_10_row_0" class="intro">
            <td class="english">From the psalms of our teacher David the prophet may his blessings be with us
                Amen.</td>
            <td class="arabic">من مزامير معلمنا داود النبي، بركاته علينا أمين.</td>
        </tr>

        <tr id="table_10_row_1" class="text">
            <td class="english">Out of the mouth of babes and nursing infants You have ordained strength, O
                Lord, our Lord, How excellent is Your name in all the earth. Alleluia</td>
            <td class="arabic">من أفواه الاطفال والرضعان هيأت سبحاً. أيها الرب ربنا مثل عجب صار اسمك على الأرض
                كلها. الليلويا.</td>
        </tr>
        <tr id="table_10_row_2" class="intro">
            <td class="english">May God have mercy and compassion upon us and make us worthy to hear Your Holy
                Gospel. A chapter according to Saint Mathew, may his blessings be with us, Amen.</td>
            <td class="arabic">اللهم تراءف علينا و أرحمنا و أجعلنا مستحقين لسماع إنجيلك المقدس، فصل من إنجيل
                معلمنا متى البشير، بركاته تكون معنا أمين.</td>
        </tr>

        <tr id="table_10_row_3" class="text">
            <td class="english">And when He had come into Jerusalem, all the city was moved, saying, “Who is
                this?” So the multitudes said, “This is Jesus, the prophet from Nazareth of Galilee.” Then Jesus
                went into the temple of God and drove out all those who bought and sold in the temple, and
                overturned the tables of the money changers and the seats of those who sold doves. And He said
                to them,</td>
            <td class="arabic">وَلَمَّا دَخَلَ أُورُشَلِيمَ ارْتَجَّتِ الْمَدِينَةُ كُلُّهَا قَائِلَةً: «مَنْ
                هَذَا؟» فَقَالَتِ الْجُمُوعُ: «هَذَا يَسُوعُ النَّبِيُّ الَّذِي مِنْ نَاصِرَةِ الْجَلِيلِ».
                وَدَخَلَ يَسُوعُ إِلَى هَيْكَلِ اللَّهِ وَأَخْرَجَ جَمِيعَ الَّذِينَ كَانُوا يَبِيعُونَ
                وَيَشْتَرُونَ فِي الْهَيْكَلِ وَقَلَبَ مَوَائِدَ الصَّيَارِفَةِ وَكَرَاسِيَّ بَاعَةِ الْحَمَامِ
                وَقَالَ لَهُمْ:</td>
        </tr>
        <tr id="table_10_row_4" class="text">
            <td class="english">“It is written, ‘My house shall be called a house of prayer, but you have made
                it a ‘den of thieves.’” Then the blind and the lame came to Him in the temple, and He healed
                them.
                But when the chief priests and scribes saw the wonderful things that He did, and the children
                crying out in the temple and saying, “Hosanna to the Son of David!” they were indignant and said
                to Him, “Do You hear what these are saying?”</td>
            <td class="arabic">«مَكْتُوبٌ: بَيْتِي بَيْتَ الصَّلاَةِ يُدْعَى. وَأَنْتُمْ جَعَلْتُمُوهُ مَغَارَةَ
                لُصُوصٍ!» وَتَقَدَّمَ إِلَيْهِ عُمْيٌ وَعُرْجٌ فِي الْهَيْكَلِ فَشَفَاهُمْ.
                فَلَمَّا رَأَى رُؤَسَاءُ الْكَهَنَةِ وَالْكَتَبَةُ الْعَجَائِبَ الَّتِي صَنَعَ وَالأَوْلاَدَ
                يَصْرَخُونَ فِي الْهَيْكَلِ وَيَقُولُونَ: «أُوصَنَّا لاِبْنِ دَاوُدَ» غَضِبُوا وَقَالُوا لَهُ:
                «أَتَسْمَعُ مَا يَقُولُ هَؤُلاَءِ؟»</td>
        </tr>
        <tr id="table_10_row_5" class="text">
            <td class="english">And Jesus said to them, “Yes. Have you never read, ‘Out of the mouth of babes
                and nursing infants You have perfected praise’?” Then He left them and went out of the city to
                Bethany, and He lodged there.</td>
            <td class="arabic">فَقَالَ لَهُمْ يَسُوعُ: «نَعَمْ! أَمَا قَرَأْتُمْ قَطُّ: مِنْ أَفْوَاهِ
                الأَطْفَالِ وَالرُّضَّعِ هَيَّأْتَ تَسْبِيحاً؟». ثُمَّ تَرَكَهُمْ وَخَرَجَ خَارِجَ الْمَدِينَةِ
                إِلَى بَيْتِ عَنْيَا وَبَاتَ هُنَاكَ.</td>
        </tr>
        <tr id="table_10_row_6" class="congregation">
            <td class="english">Glory be to God, forever.</td>
            <td class="arabic">والمجد لله دائما.</td>
        </tr>
    </table>
</div>
        `;
};