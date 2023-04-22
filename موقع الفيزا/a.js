$(document).ready(function() {
  $('form').submit(function(event) {
      // تجنب إرسال النموذج بشكل افتراضي
      event.preventDefault();

      // استرداد القيم المدخلة في الحقول
      var name = $('#name').val();
      var email = $('#email').val();
      var card = $('#card').val();
      var expiry = $('#expiry').val();
      var cvv = $('#cvv').val();

      // التحقق من أن جميع الحقول قد تم ملؤها
      if (!name || !email || !card || !expiry || !cvv) {
          alert('يرجى ملء جميع الحقول');
          return;
      }

      // التحقق من صحة رقم البطاقة باستخدام Luhn algorithm
      if (!luhnCheck(card)) {
          alert('رقم البطاقة غير صحيح');
          return;
      }

      // بمجرد أن تم التحقق من جميع الحقول وصحة رقم البطاقة، يمكن إرسال النموذج
      alert('تم إرسال الدفع بنجاح!');
      $('form')[0].reset();
  });

  // Luhn algorithm
  function luhnCheck(value) {
      // تحويل القيمة إلى مصفوفة من الأرقام
      var digits = value.split('').map(function(num) {
          return parseInt(num);
      });

      // تبديل كل رقم زوجي بنفس الرقم ثماني مرات إذا كان أكبر من 4، وضعف كل رقم فردي
      for (var i = digits.length - 2; i >= 0; i -= 2) {
          var doubled = digits[i] * 2;
          if (doubled > 9) {
              digits[i] = doubled - 9;
          } else {
              digits[i] = doubled;
          }
      }

      // جمع جميع الأرقام
      var sum = digits.reduce(function(acc, val) {
          return acc + val;
      }, 0);

      // يكون الرقم صالحًا إذا كان مجموع جميع ا
