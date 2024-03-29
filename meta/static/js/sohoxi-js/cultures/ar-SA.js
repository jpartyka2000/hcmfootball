(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define('cultures/ar-SA', ['jquery'], factory);
    factory();
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function () {

  if (!Locale) {
    return;
  }

  //Get Latest from http://www.unicode.org/Public/cldr/25/
  Locale.addCulture('ar-SA', {
    //layout/language
    language: 'ar',
    englishName: 'Arabic (Saudi Arabia)',
    nativeName: 'العربية (المملكة العربية السعودية)',
    //layout/orientation/@characters
    direction: 'right-to-left',
    calendars: [{
      name: 'islamic-umalqura',
      dateFormat: {'separator': '/', //Infered
                   'short': 'dd/MM/yyyy', //use four digit year
                   'medium': 'dd MMM، y',
                   'long': 'd MMMM، yyyy',
                   'full': 'EEEE، dd MMMM، yyyy',
                   'datetime': 'dd/MM/yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      days: {
         wide: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
         abbreviated: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
      },
      months: {
        wide: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
        abbreviated: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة']
      },
      timeFormat: 'h:mm a',
      dayPeriods: ['ص', 'م'],
      firstDayofWeek: 6,  //Starts on Sat
      conversions: {
        yearInfo: [
          [746, -2198707200000],
          [1769, -2168121600000],
          [3794, -2137449600000],
          [3748, -2106777600000],
          [3402, -2076192000000],
          [2710, -2045606400000],
          [1334, -2015020800000],
          [2741, -1984435200000],
          [3498, -1953763200000],
          [2980, -1923091200000],
          [2889, -1892505600000],
          [2707, -1861920000000],
          [1323, -1831334400000],
          [2647, -1800748800000],
          [1206, -1770076800000],
          [2741, -1739491200000],
          [1450, -1708819200000],
          [3413, -1678233600000],
          [3370, -1647561600000],
          [2646, -1616976000000],
          [1198, -1586390400000],
          [2397, -1555804800000],
          [748, -1525132800000],
          [1749, -1494547200000],
          [1706, -1463875200000],
          [1365, -1433289600000],
          [1195, -1402704000000],
          [2395, -1372118400000],
          [698, -1341446400000],
          [1397, -1310860800000],
          [2994, -1280188800000],
          [1892, -1249516800000],
          [1865, -1218931200000],
          [1621, -1188345600000],
          [683, -1157760000000],
          [1371, -1127174400000],
          [2778, -1096502400000],
          [1748, -1065830400000],
          [3785, -1035244800000],
          [3474, -1004572800000],
          [3365, -973987200000],
          [2637, -943401600000],
          [685, -912816000000],
          [1389, -882230400000],
          [2922, -851558400000],
          [2898, -820886400000],
          [2725, -790300800000],
          [2635, -759715200000],
          [1175, -729129600000],
          [2359, -698544000000],
          [694, -667872000000],
          [1397, -637286400000],
          [3434, -606614400000],
          [3410, -575942400000],
          [2710, -545356800000],
          [2349, -514771200000],
          [605, -484185600000],
          [1245, -453600000000],
          [2778, -422928000000],
          [1492, -392256000000],
          [3497, -361670400000],
          [3410, -330998400000],
          [2730, -300412800000],
          [1238, -269827200000],
          [2486, -239241600000],
          [884, -208569600000],
          [1897, -177984000000],
          [1874, -147312000000],
          [1701, -116726400000],
          [1355, -86140800000],
          [2731, -55555200000],
          [1370, -24883200000],
          [2773, 5702400000],
          [3538, 36374400000],
          [3492, 67046400000],
          [3401, 97632000000],
          [2709, 128217600000],
          [1325, 158803200000],
          [2653, 189388800000],
          [1370, 220060800000],
          [2773, 250646400000],
          [1706, 281318400000],
          [1685, 311904000000],
          [1323, 342489600000],
          [2647, 373075200000],
          [1198, 403747200000],
          [2422, 434332800000],
          [1388, 465004800000],
          [2901, 495590400000],
          [2730, 526262400000],
          [2645, 556848000000],
          [1197, 587433600000],
          [2397, 618019200000],
          [730, 648691200000],
          [1497, 679276800000],
          [3506, 709948800000],
          [2980, 740620800000],
          [2890, 771206400000],
          [2645, 801792000000],
          [693, 832377600000],
          [1397, 862963200000],
          [2922, 893635200000],
          [3026, 924307200000],
          [3012, 954979200000],
          [2953, 985564800000],
          [2709, 1016150400000],
          [1325, 1046736000000],
          [1453, 1077321600000],
          [2922, 1107993600000],
          [1748, 1138665600000],
          [3529, 1169251200000],
          [3474, 1199923200000],
          [2726, 1230508800000],
          [2390, 1261094400000],
          [686, 1291680000000],
          [1389, 1322265600000],
          [874, 1352937600000],
          [2901, 1383523200000],
          [2730, 1414195200000],
          [2381, 1444780800000],
          [1181, 1475366400000],
          [2397, 1505952000000],
          [698, 1536624000000],
          [1461, 1567209600000],
          [1450, 1597881600000],
          [3413, 1628467200000],
          [2714, 1659139200000],
          [2350, 1689724800000],
          [622, 1720310400000],
          [1373, 1750896000000],
          [2778, 1781568000000],
          [1748, 1812240000000],
          [1701, 1842825600000],
          [0, 1873411200000]
        ],
        minDate: -2198707200000,
        maxDate: 1873411199999,
        toGregorian: function(hyear, hmonth, hday) {
          var days = hday - 1,
            gyear = hyear - 1318;

          if (gyear < 0 || gyear >= this.yearInfo.length) {
            return null;
          }

          var info = this.yearInfo[gyear],
            gdate = new Date(info[1]),
            monthLength = info[0];

          // Date's ticks in javascript are always from the GMT time,
          // but we are interested in the gregorian date in the same timezone,
          // not what the gregorian date was at GMT time, so we adjust for the offset.
          gdate.setMinutes(gdate.getMinutes() + gdate.getTimezoneOffset());

          for (var i = 0; i < hmonth; i++) {
            days += 29 + (monthLength & 1);
            monthLength = monthLength >> 1;
          }

          gdate.setDate(gdate.getDate() + days);
          return gdate;
        },
        fromGregorian: function(gdate) {
          // Date's ticks in javascript are always from the GMT time,
          // but we are interested in the hijri date in the same timezone,
          // not what the hijri date was at GMT time, so we adjust for the offset.
          var ticks = gdate - gdate.getTimezoneOffset() * 60000;
          if (ticks < this.minDate || ticks > this.maxDate) {
            return null;
          }

          var hyear = 0,
            hmonth = 1;
          // find the earliest gregorian date in the array that is greater than or equal to the given date
          while (ticks > this.yearInfo[++hyear][1]) { }

          if (ticks !== this.yearInfo[hyear][1]) {
            hyear--;
          }

          var info = this.yearInfo[hyear],
            // how many days has it been since the date we found in the array?
            // 86400000 = ticks per day
            days = Math.floor((ticks - info[1]) / 86400000),
            monthLength = info[0];
          hyear += 1318; // the Nth array entry corresponds to hijri year 1318+N

          // now increment day/month based on the total days, considering
          // how many days are in each month. We cannot run past the year
          // mark since we would have found a different array entry in that case.
          var daysInMonth = 29 + (monthLength & 1);
          while (days >= daysInMonth) {
            days -= daysInMonth;
            monthLength = monthLength >> 1;
            daysInMonth = 29 + (monthLength & 1);
            hmonth++;
          }

          // remaining days is less than is in one month, thus is the day of the month we landed on
          // hmonth-1 because in javascript months are zero based, stay consistent with that.
          return [hyear, hmonth - 1, days + 1];
        }
      }
    },
    {
      name: 'gregorian',
      //ca-gregorian/main/dates/calendars/gregorian/dateFormats/
      dateFormat: {'separator': '/', //Infered
                   'timeSeparator': ':',
                   'short': 'd/MM//yyyy', //use four digit year
                   'medium': 'dd/MM/yyyy',
                   'long': 'd MMMM، yyyy',
                   'full': 'EEEE، d MMMM، yyyy',
                   'month': 'dd MMMM',
                   'year': 'MMMM yyyy',
                   'timestamp': 'h:mm:ss a',
                   'datetime': 'd/MM//yyyy h:mm a'}, //Infered short + short gregorian/dateTimeFormats
      //ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
      days: {
        wide: ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
				abbreviated: ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
				narrow: ['ح','ن','ث','ر','خ','ج','س']
      },
      //ca-gregorian/main/dates/calendars/gregorian/months/format/wide
      months: {
        wide: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
        abbreviated: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
      },
      //ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
      timeFormat: 'h:mm a',
      //ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
      dayPeriods: ['ص', 'م']

    }],
    //numbers/currencyFormats-numberSystem-latn/standard (Replace Sign http://www.currencysymbols.in ?)
    currencySign: '﷼', //(Replace Sign http://www.currencysymbols.in ?)
    currencyFormat: '¤ #,##0.00',
    //numbers/symbols-numberSystem-latn
    numbers: {
      percentSign: '٪',
      percentFormat: '#,##0 ٪',
      minusSign: '-',
      decimal: '٫',
      group: '٬'
    },
    //Resx - Approved By Translation Team
    messages: {
      'AboutText': {id: 'AboutText', value: 'حقوق النشر &copy; {0} Infor. جميع الحقوق محفوظة. تعتبر الكلمات والعلامات المنصوص عليهما بهذه الوثيقة علامات تجارية و/أو علامات تجارية مسجلة لشركة Infor و/أو للشركات التابعة لها والفرعية. جميع الحقوق محفوظة. تعتبر كافة العلامات التجارية المدرجة هنا هي ملكية خاصة بأصحابها.'},
      'Actions': {id: 'Actions', value: 'إجراءات', comment: 'Tooltip text for the action button with additional in context actions'},
      'Add': {id: 'Add', value: 'إضافة', comment: 'Add'},
      'AddNewTab': {id: 'AddNewTab', value: 'إضافة علامة تبويب جديدة', comment: 'Attached to a button that adds new tabs'},
      'AdvancedFilter': {id: 'AdvancedFilter', value: 'إنشاء تصفية متقدمة', comment: 'In a data grid active an advanced filtering feature'},
      'Alert': {id: 'Alert', value: 'تنبيه', comment: 'Alert'},
      'All': {id: 'All', value: 'الكل', comment: 'All items in the context of a filter'},
      'AllResults': {id: 'AllResults', value: 'كافة النتائج لـ', comment: 'Search Results Text'},
      'AligntoBottom': {id: 'AligntoBottom', value: 'محاذاة إلى الأسفل', comment: 'Align to Bottom tooltip'},
      'AlignCenterHorizontally': {id: 'AlignCenterHorizontally', value: 'محاذاة أفقية إلى الوسط', comment: 'Align Center Horizontally tooltip'},
      'Amber': {id: 'Amber', value: 'كهرماني', comment: 'Color in our color pallette'},
      'Amethyst': {id: 'Amethyst', value: 'أرجواني', comment: 'Color in our color pallette'},
      'Apply': {id: 'Apply', value: 'تطبيق', comment: 'Text in a button to apply an action'},
      'Attach': {id: 'Attach', value: 'مرفق', comment: 'Attach'},
      'Azure': {id: 'Azure', value: 'سماوي', comment: 'Color in our color pallette'},
      'BackgroundColor': {id: 'BackgroundColor', value: 'لون الخلفية', comment: 'add or edit text background color in the editor'},
      'Between': {id: 'Between', value: 'بين', comment: 'Between in icons for filtering'},
      'Blockquote': {id: 'Blockquote', value: 'اقتباس كتلة', comment: 'insert a block quote in the editor'},
      'Bold': {id: 'Bold', value: 'غامق', comment: 'Make text Bold'},
      'Bookmarked': {id: 'Bookmarked', value: 'عليه إشارة مرجعية', comment: 'Bookmark filled - Element is already bookmarked'},
      'BookmarkThis': {id: 'BookmarkThis', value: 'وضع إشارة على هذا', comment: 'Bookmark an element'},
      'Breadcrumb': {id: 'Breadcrumb', value: 'التنقل المتقدم', comment: 'Text describing the Breadcrumb'},
      'BulletedList': {id: 'BulletedList', value: 'قائمة نقطية', comment: 'Bulleted List tooltip'},
      'Calendar': {id: 'Calendar', value: 'التقويم', comment: 'Inline Text for the title of the Calendar control'},
      'Camera': {id: 'Camera', value: 'كاميرا', comment: 'Camera tooltip'},
      'Cancel': {id: 'Cancel', value: 'إلغاء', comment: 'Cancel tooltip'},
      'CapsLockOn': {id: 'CapsLockOn', value: 'تشغيل Caps Lock', comment: 'Caps Lock On message'},
      'Cart': {id: 'Cart', value: 'سلة', comment: 'Cart tooltip'},
      'CenterText': {id: 'CenterText', value: 'توسيط', comment: 'An Icon Tooltip'},
      'CharactersLeft': {id: 'CharactersLeft', value: 'الأحرف المتبقية {0}', comment: 'indicator showing how many more characters you can type.'},
      'CharactersMax': {id: 'CharactersMax', value: 'الحد الأقصى لعدد الأحرف ', comment: 'indicator showing how many max characters you can type.'},
      'ChangeSelection': {id: 'ChangeSelection', value: '. استخدم مفاتيح الأسهم لتغيير الاختيار.', comment: 'Audible Text for drop down list help'},
      'Checkbox': {id: 'Checkbox', value: 'خانة الاختيار', comment: 'Checkbox tooltip'},
      'Checked': {id: 'Checked', value: 'محدّد', comment: 'Checked tooltip'},
      'Clear': {id: 'Clear', value: 'مسح', comment: 'Tooltip for a Clear Action'},
      'ClearFilter': {id: 'ClearFilter', value: 'مسح عامل التصفية', comment: 'Clear the current filter criteria'},
      'Clock': {id: 'Clock', value: 'ساعة', comment: 'Clock tooltip'},
      'Close': {id: 'Close', value: 'إغلاق', comment: 'Tooltip for a Close Button Action'},
      'Copy': {id: 'Copy', value: 'نسخ', comment: 'Copy tooltip'},
      'Collapse': {id: 'Collapse', value: 'طي', comment: 'Collapse / close a tree/submenu'},
      'CollapseAppTray': {id: 'CollapseAppTray', value: 'طي لوحة التطبيق', comment: 'Collapse App Tray tooltip'},
      'Columns': {id: 'Columns', value: 'أعمدة', comment: 'Columns tooltip'},
      'Component': {id: 'Component', value: 'المكوّن', comment: 'As in a UI component - building block.'},
      'Compose': {id: 'Compose', value: 'إنشاء', comment: 'Compose tooltip'},
      'Completed': {id: 'Completed', value: 'مكتمل', comment: 'Text For a Completed Status'},
      'Confirm': {id: 'Confirm', value: 'تأكيد', comment: 'Confirm tooltip'},
      'Contains': {id: 'Contains', value: 'يحتوي على', comment: 'Contains in icons for filtering'},
      'CssClass': {id: 'CssClass', value: 'فئة Css', comment: 'Label for entering a Css Class name'},
      'Cut': {id: 'Cut', value: 'قص', comment: 'Cut tooltip'},
      'Date': {id: 'Date', value: 'التاريخ', comment: 'Describes filtering by a date data type'},
      'Delete': {id: 'Delete', value: 'حذف', comment: 'Delete Toolbar Action Tooltip'},
      'DistributeHoriz': {id: 'DistributeHoriz', value: 'توزيع أفقي', comment: 'Icon button tooltip for action that distributes elements across Horizontally'},
      'Document': {id: 'Document', value: 'مستند', comment: 'Document tooltip'},
      'Dirty': {id: 'Dirty', value: 'تم تغيير الصف', comment: 'Record is dirty / modified'},
      'Drilldown': {id: 'Drilldown', value: 'التصفح لأسفل', comment: 'Drill by moving page flow into a record'},
      'Drillup': {id: 'Drillup', value: 'التصفح لأعلى', comment: 'Opposite of Drilldown, move back up to a larger set of records'},
      'Dropdown': {id: 'Dropdown', value: 'قائمة منسدلة', comment: 'Dropdown'},
      'DoesNotContain': {id: 'DoesNotContain', value: 'لا يحتوي على', comment: 'Does Not Contain in icons for filtering'},
      'DoesNotEndWith': {id: 'DoesNotEndWith', value: 'لا تنتهي بـ', comment: 'For condition filtering'},
      'DoesNotEqual': {id: 'DoesNotEqual', value: 'لا يساوي', comment: 'Does Not Equal in icons for filtering'},
      'DoesNotStartWith': {id: 'DoesNotStartWith', value: 'لا تبدأ بـ', comment: 'For condition filtering'},
      'Down': {id: 'Down', value: 'أسفل', comment: 'Down tooltip'},
      'Download': {id: 'Download', value: 'تنزيل', comment: 'Download tooltip'},
      'Duplicate': {id: 'Duplicate', value: 'مكرر', comment: 'Duplicate tooltip'},
      'EitherSelectedOrNotSelected': {id: 'EitherSelectedOrNotSelected', value: 'إما محدّد أو غير محدّد', comment: 'Either Selected Or NotSelected in icons for filtering'},
      'EndsWith': {id: 'EndsWith', value: 'ينتهي بـ', comment: 'for condition filtering'},
      'EnterComments': {id: 'EnterComments', value: 'أدخل التعليقات هنا...', comment: 'Placeholder text for a text input (comments)'},
      'Error': {id: 'Error', value: 'خطأ', comment: 'Title, Spoken Text describing fact an error has occured'},
      'ErrorAllowedTypes': {id: 'ErrorAllowedTypes', value: 'لا يُسمح بنوع الملف', comment: 'Error string for file-upload'},
      'ErrorMaxFileSize': {id: 'ErrorMaxFileSize', value: 'تم تجاوز حد حجم الملف', comment: 'Error string for file-upload'},
      'ErrorMaxFilesInProcess': {id: 'ErrorMaxFilesInProcess', value: 'تم تجاوز الحد الأقصى لعدد الملفات المسموح به', comment: 'Error string for file-upload'},
      'EmailValidation': {id: 'EmailValidation', value: 'عنوان البريد الإلكتروني غير صحيح', comment: 'This the rule for email validation'},
      'Emerald': {id: 'Emerald', value: 'زمردي', comment: 'Color in our color pallette'},
      'Expand': {id: 'Expand', value: 'توسيع', comment: 'Expand open a tree/submenu'},
      'ExpandAppTray': {id: 'ExpandAppTray', value: 'توسيع لوحة التطبيق', comment: 'ExpandAppTray tooltip'},
      'ExpandCollapse': {id: 'ExpandCollapse', value: 'توسيع / طي', comment: 'Text to toggle a button in a container.'},
      'ExportAsSpreadsheet': {id: 'ExportAsSpreadsheet', value: 'تصدير كجدول بيانات', comment: 'Export as Spreadsheet tooltip'},
      'Edit': {id: 'Edit', value: 'تحرير', comment: 'Edit tooltip'},
      'Equals': {id: 'Equals', value: 'يساوي', comment: 'Equals in icons for filtering'},
      'ExitFullView': {id: 'ExitFullView', value: 'إنهاء عرض كامل الصفحة', comment: 'Exit Full View tooltip'},
      'Export': {id: 'Export', value: 'تصدير', comment: 'Export tooltip'},
      'ExportToExcel': {id: 'ExportToExcel', value: 'تصدير إلى Excel', comment: 'Export To Excel menu option in datagrid'},
      'Favorite': {id: 'Favorite', value: 'المفضلة', comment: 'A favorite item'},
      'FileUpload': {id: 'FileUpload', value: 'تحميل الملف. اضغط على Enter للاستعراض بحثاً عن ملف', comment: 'Screen Reader instructions'},
      'Filter': {id: 'Filter', value: 'تصفية', comment: 'Filter tooltip'},
      'FirstPage': {id: 'FirstPage', value: 'الصفحة الأولى', comment: 'First Page tooltip'},
      'Folder': {id: 'Folder', value: 'مجلد', comment: 'Folder tooltip'},
      'FullView': {id: 'FullView', value: 'عرض كامل الصفحة', comment: 'Full View tooltip'},
      'GoForward': {id: 'GoForward', value: 'الانتقال للأمام', comment: 'Move Page / object this direction'},
      'GoBack': {id: 'GoBack', value: 'الانتقال للخلف', comment: 'Move Page / object this directionp'},
      'GoDown': {id: 'GoDown', value: 'الانتقال للأسفل', comment: 'Move Page / object this directionp'},
      'GoUp': {id: 'GoUp', value: 'الانتقال للأعلى', comment: 'Move Page / object this direction'},
      'Graphite': {id: 'Graphite', value: 'غرافيتي', comment: 'Color in our color pallette'},
      'GreaterOrEquals': {id: 'GreaterOrEquals', value: 'أكبر من أو تساوي', comment: 'Greater Than Or Equals in icons for filtering'},
      'GreaterThan': {id: 'GreaterThan', value: 'أكبر من', comment: 'Greater Than in icons for filtering'},
      'Grid': {id: 'Grid', value: 'شبكة', comment: 'Grid tooltip'},
      'Hours': {id: 'Hours', value: 'ساعات', comment: 'the hour portion of a time'},
      'HeadingThree': {id: 'HeadingThree', value: 'العنوان ثلاثة', comment: 'Heading Three tooltip'},
      'HeadingFour': {id: 'HeadingFour', value: 'العنوان أربعة', comment: 'Heading Four tooltip'},
      'Highest': {id: 'Highest', value: 'الأعلى', comment: 'Highest Four tooltip'},
      'Home': {id: 'Home', value: 'الصفحة الرئيسية', comment: 'Home tooltip'},
      'HtmlView': {id: 'HtmlView', value: 'عرض HTML', comment: 'Html View tooltip'},
      'Image': {id: 'Image', value: 'الصورة', comment: 'Image of something'},
      'Import': {id: 'Import', value: 'استيراد', comment: 'Import tooltip'},
      'Info': {id: 'Info', value: 'معلومات', comment: 'Info tooltip'},
      'InProgress': {id: 'In Progress', value: 'قيد التنفيذ', comment: 'Info tooltip that an action is in progress'},
      'Insert': {id: 'Insert', value: 'إدراج', comment: 'Insert Modal Dialog Button'},
      'InsertAnchor': {id: 'InsertAnchor', value: 'إدراج ارتساء', comment: 'Insert Acnhor (link) in an editor'},
      'InsertImage': {id: 'InsertImage', value: 'إدراج صورة', comment: 'Insert Image in an editor'},
      'InsertLink': {id: 'InsertLink', value: 'إدراج رابط', comment: 'Insert Link in an editor'},
      'InsertUrl': {id: 'InsertUrl', value: 'إدراج عنوان Url', comment: 'Insert a Url in an editor'},
      'Italic': {id: 'Italic', value: 'مائل', comment: 'Make Text Italic'},
      'InvalidDate': {id: 'InvalidDate', value: 'تاريخ غير صحيح', comment: 'validation message for wrong date format (short)'},
      'InvalidTime': {id: 'InvalidTime', value: 'وقت غير صحيح', comment: 'validation message for wrong time format'},
      'Inventory': {id: 'Inventory', value: 'المخزون', comment: 'Icon button tooltop for Inventory Action'},
      'IsEmpty': {id: 'IsEmpty', value: 'فارغاً', comment: 'Is Empty in icons for filtering'},
      'IsNotEmpty': {id: 'IsNotEmpty', value: 'غير فارغ', comment: 'Is Not Empty in icons for filtering'},
      'ItemsSelected': {id: 'ItemsSelected', value: 'العناصر المحدّدة', comment: 'Num of Items selected for swaplist'},
      'JustifyCenter': {id: 'JustifyCenter', value: 'توسيط', comment: 'justify text to center in the editor'},
      'JustifyLeft': {id: 'JustifyLeft', value: 'محاذاة إلى اليسار', comment: 'justify text to left in the editor'},
      'JustifyRight': {id: 'JustifyRight', value: 'محاذاة إلى اليمين', comment: 'justify text to right in the editor'},
      'Keyword': {id: 'Keyword', value: 'كلمة أساسية', comment: 'Describes filtering by a keyword search'},
      'Launch': {id: 'Launch', value: 'يشغّل', comment: 'Launch'},
      'LastPage': {id: 'LastPage', value: 'آخر صفحة', comment: 'Last Page tooltip'},
      'Left': {id: 'Left', value: 'يسار', comment: 'Left tooltip'},
      'LessOrEquals': {id: 'LessOrEquals', value: 'أقل من أو تساوي', comment: 'Less Than Or Equals in icons for filtering'},
      'LessThan': {id: 'LessThan', value: 'أقل من', comment: 'Less Than in icons for filtering'},
      'Link': {id: 'Link', value: 'رابط', comment: 'Link - as in hyperlink - icon tooltop'},
      'Load': {id: 'Load', value: 'تحميل', comment: 'Load icon tooltip'},
      'Loading': {id: 'Loading', value: 'تحميل', comment: 'Text below spinning indicator to indicate loading'},
      'Locked': {id: 'Locked', value: 'مؤمّن', comment: 'Locked tooltip'},
      'Logout': {id: 'Logout', value: 'تسجيل الخروج', comment: 'Log out of the application'},
      'Lookup': {id: 'Lookup', value: 'البحث', comment: 'Lookup - As in looking up a record or value'},
      'Lowest': {id: 'Lowest', value: 'الأقل', comment: 'Lowest - As in Lowest value'},
      'Mail': {id: 'Mail', value: 'بريد', comment: 'Mail tooltip'},
      'MapPin': {id: 'MapPin', value: 'رمز', comment: 'Map Pin tooltip'},
      'Maximize': {id: 'Maximize', value: 'تكبير', comment: 'Maximize a screen or dialog in the UI'},
      'Median': {id: 'Median', value: 'الوسيط', comment: 'Median in Mathematics'},
      'Medium': {id: 'Medium', value: 'متوسط', comment: 'Describes a Medium sized Row Height in a grid/list'},
      'Menu': {id: 'Menu', value: 'قائمة', comment: 'Menu tooltip'},
      'MingleShare': {id: 'MingleShare', value: 'المشاركة مع Ming.le', comment: 'Share the contextual object/action in the mingle system'},
      'Minutes': {id: 'Minutes', value: 'الدقائق', comment: 'the minutes portion of a time'},
      'Minimize': {id: 'Minimize', value: 'تصغير', comment: 'Minimize tooltip'},
      'Minus': {id: 'Minus', value: 'ناقص', comment: 'Minus tooltip'},
      'Mobile': {id: 'Mobile', value: 'الهاتف المتحرك', comment: 'Indicates a mobile device (phone tablet ect)'},
      'More': {id: 'More', value: 'المزيد...', comment: 'Text Indicating More Buttons or form content'},
      'MoreActions': {id: 'MoreActions', value: 'إجراءات إضافية', comment: 'Text on the More Actions button indictating hidden functions'},
      'MsgDirty': {id: 'MsgDirty', value: '، معدّل', comment: 'for modified form fields'},
      'NewDocument': {id: 'NewDocument', value: 'مستند جديد', comment: 'New Document tooltip'},
      'NewItem': {id: 'NewItem', value: 'عنصر جديد', comment: 'New item in listbuilder'},
      'Next': {id: 'Next', value: 'التالي', comment: 'Next in icons tooltip'},
      'NextPage': {id: 'NextPage', value: 'الصفحة التالية', comment: 'Next on Pager'},
      'NextMonth': {id: 'NextMonth', value: 'الشهر التالي', comment: 'the label for the button that moves calendar to next/prev'},
      'No': {id: 'No', value: 'لا', comment: 'On a dialog button'},
      'NoResults': {id: 'NoResults', value: 'لا توجد نتائج', comment: 'Search Results Text'},
      'Normal': {id: 'Normal', value: 'عادي', comment: 'Normal row height'},
      'Notes': {id: 'Notes', value: 'ملاحظات', comment: 'Notes icon tooltip'},
      'NotSelected': {id: 'NotSelected', value: 'غير محدّد', comment: 'Not Selected in icons for filtering'},
      'NumberList': {id: 'NumberList', value: 'قائمة رقمية', comment: 'Number List tooltip'},
      'OpenBackClose': {id: 'OpenBackClose', value: 'فتح / السابق / إغلاق', comment: 'Open / Back / Close tooltip'},
      'OpenClose': {id: 'OpenClose', value: 'فتح / إغلاق', comment: 'Open / Close tooltip'},
      'OrderedList': {id: 'OrderedList', value: 'إدراج/إزالة قائمة مرقّمة', comment: 'Insert an Ordered list in the editor'},
      'Page': {id: 'Page', value: 'صفحة ', comment: 'Text on the pager links'},
      'PageOf': {id: 'PageOf', value: 'صفحة {0} من {1}', comment: 'Pager Text Showing current and number of pages'},
      'PageOn': {id: 'PageOn', value: 'أنت موجود حالياً بالصفحة ', comment: 'Text on the pager links'},
      'Paste': {id: 'Paste', value: 'لصق', comment: 'Paste icon tooltip'},
      'PasswordValidation': {id: 'PasswordValidation', value: '<strong>يجب أن تتكون كلمة المرور من 10 أحرف على الأقل</strong><br><br> وتضم حرف كبير واحد على الأقل<br> وحرف صغير واحد على الأقل<br> وتضم حرف واحد خاص<br> ولا تحتوي على اسم المستخدم<br> ولا يمكن أن تكون كلمة مرور مستخدمة من قبل<br>', comment: 'Password validation requirements'},
      'PasswordConfirmValidation': {id: 'PasswordConfirmValidation', value: 'يجب أن تتطابق كلمات المرور', comment: 'Password Confirm validation'},
      'Peak': {id: 'Peak', value: 'ذروة', comment: 'the max or peak value in a chart'},
      'PersonalizeColumns': {id: 'PersonalizeColumns', value: 'تخصيص الأعمدة', comment: 'Customize Columns in a Grid'},
      'Period': {id: 'Period', value: 'الفترة', comment: 'the am/pm portion of a time'},
      'PressDown': {id: 'PressDown', value: 'اضغط على السهم لأسفل لتحديد تاريخ', comment: 'the audible label for Tooltip about how to operate the date picker'},
      'PressShiftF10': {id: 'PressShiftF10', value: 'اضغط على Shift+F10 لفتح قائمة السياق.', comment: 'the audible infor for screen readers on how to use a field with a popup menu'},
      'Previous': {id: 'Previous', value: 'السابق', comment: 'Previous icon tooltip - moved to previous record'},
      'PreviousMonth': {id: 'PreviousMonth', value: 'الشهر السابق', comment: 'the label for the button that moves calendar to next/prev'},
      'PreviousPage': {id: 'PreviousPage', value: 'الصفحة السابقة', comment: 'Previous Page tooltip'},
      'Print': {id: 'Print', value: 'طباعة', comment: 'Print tooltip'},
      'Range': {id: 'Range', value: 'نطاق', comment: 'Range for tooltip'},
      'RecordsPerPage': {id: 'RecordsPerPage', value: '{0} سجل/سجلات لكل صفحة', comment: 'Dropd own allows the user to select how many visible records {} shows select value.'},
      'Redo': {id: 'Redo', value: 'إعادة', comment: 'Redo tooltip'},
      'Refresh': {id: 'Refresh', value: 'تحديث', comment: 'Refresh tooltip'},
      'Required': {id: 'Required', value: 'مطلوب', comment: 'indicates a form field is manditory'},
      'Reset': {id: 'Reset', value: 'إعادة تعيين', comment: 'Reset tooltip'},
      'ResetDefault': {id: 'ResetDefault', value: 'إعادة التعيين إلى الافتراضي', comment: 'Reset Datagrid Columns, Filter and other Layout'},
      'Results': {id: 'Results', value: 'النتائج', comment: 'As in showing N Results in a List'},
      'RightAlign': {id: 'RightAlign', value: 'محاذاة إلى اليمين', comment: 'Right Align tooltip'},
      'RightAlignText': {id: 'RightAlignText', value: 'محاذاة إلى اليمين', comment: 'Right Align Text tooltip'},
      'Right': {id: 'Right', value: 'يمين', comment: 'Right'},
      'Roles': {id: 'Roles', value: 'أدوار', comment: 'Roles tooltip'},
      'RowHeight': {id: 'RowHeight', value: 'ارتفاع الصف', comment: 'Describes the Height for Rows in a Data Grid'},
      'Ruby': {id: 'Ruby', value: 'ياقوتي', comment: 'Color in our color pallette'},
      'RunFilter': {id: 'RunFilter', value: 'تشغيل عامل التصفية', comment: 'Execute the current filter criteria'},
      'Save': {id: 'Save', value: 'حفظ', comment: 'Save tooltip'},
      'SaveCurrentView': {id: 'SaveCurrentView', value: 'حفظ طريقة العرض الحالية', comment: 'Datagrids contain view sets. This menu option saves them'},
      'SavedViews': {id: 'SavedViews', value: 'طرق عرض محفوظة', comment: 'Label for a list of Views'},
      'Seconds': {id: 'Seconds', value: 'ثواني', comment: 'the seconds portion of a time'},
      'Search': {id: 'Search', value: 'بحث', comment: 'Search tooltip'},
      'SearchColumnName': {id: 'SearchColumnName', value: 'ابحث عن اسم العمود', comment: 'Search for a datagrid column by name'},
      'SearchFolder': {id: 'SearchFolder', value: 'البحث في المجلد', comment: 'Search Folder tooltip'},
      'SearchList': {id: 'SearchList', value: 'البحث بالقائمة', comment: 'Search List tooltip'},
      'Select': {id: 'Select', value: 'تحديد', comment: 'text describing a select action'},
      'Selected': {id: 'Selected', value: 'محدّد', comment: 'text describing a selected object'},
      'Send': {id: 'Send', value: 'إرسال', comment: 'Send tooltip'},
      'SetTime': {id: 'SetTime', value: 'تعيين الوقت', comment: 'button text that inserts time when clicked'},
      'Settings': {id: 'Settings', value: 'الإعدادات', comment: 'Settings tooltip'},
      'Short': {id: 'Short', value: 'قصير', comment: 'Describes a Shorted Row Height in a grid/list'},
      'ShowFilterRow': {id: 'ShowFilterRow', value: 'إظهار صف عامل التصفية', comment: 'Toggle a row with filer info above a list'},
      'ShowLess': {id: 'ShowLess', value: 'إظهار أقل', comment: 'Show less form content'},
      'ShowMore': {id: 'ShowMore', value: 'إظهار أكثر', comment: 'Show more form content'},
      'Slate': {id: 'Slate', value: 'أردوازي', comment: 'Color in our color pallette'},
      'SliderHandle': {id: 'SliderHandle', value: 'مؤشر لـ', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control'},
      'SliderMaximumHandle': {id: 'SliderMaximumHandle', value: 'الحد الأقصى لمؤشر لـ', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control'},
      'SliderMinimumHandle': {id: 'SliderMinimumHandle', value: 'الحد الأدنى لمؤشر لـ', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control'},
      'SkipToMain': {id: 'SkipToMain', value: 'التخطي إلى المحتوى الأساسي', comment: 'Skip link in header, jumps when clicked on to main area'},
      'StartsWith': {id: 'StartsWith', value: 'يبدأ بـ', comment: 'for condition filtering'},
      'StrikeThrough': {id: 'StrikeThrough', value: 'يتوسطه خط', comment: 'turn on and off strike through text in text editor (like word)'},
      'SortAtoZ': {id: 'SortAtoZ', value: 'فرز تصاعدي', comment: 'Sort A to Z in icons for filtering'},
      'SortZtoA': {id: 'SortZtoA', value: 'فرز تنازلي', comment: 'Sort Z to A in icons for filtering'},
      'SortDown': {id: 'SortDown', value: 'فرز لأسفل', comment: 'Sort Down tooltip'},
      'SortUp': {id: 'SortUp', value: 'فرز لأعلى', comment: 'Sort Up tooltip'},
      'Subscript': {id: 'Subscript', value: 'منخفض', comment: 'Turn on and off Subscript text in text editor (like word)'},
      'Superscript': {id: 'Superscript', value: 'مرتفع', comment: 'Turn on and off Superscript text in text editor (like word)'},
      'Tabs': {id: 'Tabs', value: 'علامات التبويب...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu'},
      'Tack': {id: 'Tack', value: 'تثبيت', comment: 'Pin an object'},
      'Tall': {id: 'Tall', value: 'طويل', comment: 'Describes a Taller Row Height in a grid/list'},
      'Target': {id: 'Target', value: 'الهدف', comment: 'Label for an input to enter a Target (Url Attribute)'},
      'TextColor': {id: 'TextColor', value: 'لون النص', comment: 'add or edit text color in the editor'},

      'Timer': {id: 'Timer', value: 'المؤقت', comment: 'Timer tooltip'},
      'Today': {id: 'Today', value: 'اليوم', comment: 'refering to today on a calendar'},
      'ToggleBold': {id: 'ToggleBold', value: 'تبديل النص الغامق', comment: 'turn on and off bold in text editor (like word)'},
      'ToggleH3': {id: 'ToggleH3', value: 'تبديل العنوان 3', comment: 'turn on and off heading 3 text'},
      'ToggleH4': {id: 'ToggleH4', value: 'تبديل العنوان 4', comment: 'turn on and off heading 4 text'},
      'ToggleItalic': {id: 'ToggleItalic', value: 'تبديل النص المائل', comment: 'turn on and off Italic in text editor (like word)'},
      'ToggleUnderline': {id: 'ToggleUnderline', value: 'تبديل تسطير النص', comment: 'turn on and off Underline in text editor (like word)'},
      'Toolbar': {id: 'Toolbar', value: 'شريط الأدوات', comment: 'describing the toolbar component'},
      'TopAlign': {id: 'TopAlign', value: 'محاذاة لأعلى', comment: 'Top Align tooltip'},
      'Total': {id: 'Total', value: 'إجمالي', comment: 'Mathematic total of a calculation'},
      'Totals': {id: 'Totals', value: 'الإجماليات', comment: 'Mathematic total of a calculation (plural)'},
      'TreeCollapse': {id: 'TreeCollapse', value: 'شجرة الطي', comment: 'Tree Collapse tooltip'},
      'TreeExpand': {id: 'TreeExpand', value: 'شجرة التوسيع', comment: 'Tree Expand tooltip'},
      'Turquoise': {id: 'Turquoise', value: 'تركوازي', comment: 'Color in our color pallette'},
      'Up': {id: 'Up', value: 'أعلى', comment: 'Up tooltip'},
      'Upload': {id: 'Upload', value: 'تحميل', comment: 'Upload tooltip'},
      'UnavailableDate': {id: 'UnavailableDate', value: 'تاريخ غير متوفر', comment: 'Unavailable Date Text'},
      'Underline': {id: 'Underline', value: 'تسطير', comment: 'Make text Underlined'},
      'Undo': {id: 'Undo', value: 'تراجع', comment: 'Undo tooltip'},
      'Unlocked': {id: 'Unlocked', value: 'غير مؤمّن', comment: 'Unlocked tooltip'},
      'UnorderedList': {id: 'UnorderedList', value: 'إدراج/إزالة قائمة نقطية', comment: 'Insert an Unordered list in the editor'},
      'Unsupported': {id: 'Unsupported', value: 'هذا المحتوى غير متوفر لأنه يستخدم ميزات غير معتمدة من إصدار المتصفّح الذي تستخدمه.', comment: 'Suggesting browser upgrade for missing features.'},
      'Url': {id: 'Url', value: 'عنوان Url', comment: 'Url tooltip'},
      'UseArrow': {id: 'UseArrow', value: '. استخدم مفاتيح الأسهم للتحديد.', comment: 'Instructional comments for screen readers'},
      'UseEnter': {id: 'UseEnter', value: '. استخدم مفتاح enter أو السهم لأسفل للبحث.', comment: 'Instructional comments for screen readers'},
      'User': {id: 'User', value: 'مستخدم', comment: 'User tooltip'},
      'UserProfile': {id: 'UserProfile', value: 'ملف تعريف المستخدم', comment: 'User Profile tooltip'},
      'VerticalMiddleAlign': {id: 'VerticalMiddleAlign', value: 'محاذاة عمودية إلى الوسط', comment: 'Vertical Align tooltip'},
      'ViewSource': {id: 'ViewSource', value: 'عرض المصدر', comment: 'Toggle the source view in the editor'},
      'ViewVisual': {id: 'ViewVisual', value: 'طريقة عرض مرئية', comment: 'Toggle the visual view in the editor'},
      'Yes': {id: 'Yes', value: 'نعم', comment: 'On a dialog button'}
    }
  });
}));
