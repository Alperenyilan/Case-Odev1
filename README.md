# Proje Hakkında Genel Bilgiler
<br/>
<h1>Kodlar Hakkında</h1>

# BodyComponent: Body Component bileşeni, kullanıcıya uçuş arama ve sonuçlarını görüntülemesini sağlayan bir arayüz sağlar. HeaderTop başlığı ise, şehir seçim inputları, arama butonu uçuş sonuçları ve tüm uçuşların listelendiği bir bileşen içerir.

# BodyTicket: Bu Component, Verilerin state değişkenleri ve işlevler aracılığıyla yönetildiği bölümdür. Seyehat Türü, Sınıf ve fiyat detayları girilir.

# FlightData:Bu Component, Verilen alınıp başka componentlere aktarıldığı yerdir.

# FlightList:Bu Component, her bir uçuşun detaylarını ve bir butonu içeren bir liste öğesi oluşturmayı sağlar.

# HeaderTop:Bu Component, sayfanın üst kısmında yer alan başlık, logo ve menüyü oluşturmamızı sağlar.

# Home : Bu bileşen, HeaderTop ve BodyComponentinin çağrıldığı bileşendir.Sayfada kullanılması için bu bileşende çağırıp topladığım componenttir.

# NewDropDown: Bu Bileşen, Ant Design Select bileşenini kullanarak bir şehir seçim kutusu oluşturdum. props olarak gelen selected işlevini, bir seçenek seçildiğinde tetiklenir ve bu işlevi prop olarak geçen bileşenlerde kullanıldı.

# Pop Up: Bu bileşen,bir rezervasyon butonu oluşturur ve tıklanıldığında bir modal penceresi açar. Modal içerisinde BookTicket bileşeni yer alır, bu bileşen rezervasyon formunu içerir. "Tamam" düğmesine tıklandığında rezervasyon tamamlanır ve modal kapatılır. Bu bileşeni oluşturma sebebim ise, projenin gerçek hayat projesi olması ve Amadeus firmasının değerlerinde olan mükemmelliyetçilik anlayışına uygun olması için yapma gereksinimi kendi içimde duydum. Extradan böyle bir özellik getirmek istedim proje için.

# RadioBtn: Bu Bileşen, Kullanıcıya "Gidiş" veya "Gidiş-Dönüş" seyahat türü seçenekleri sunar. Eğer "Gidiş-Dönüş" seçilirse, hem gidiş hem de dönüş tarihi seçenekleri görüntülenir. Eğer sadece "Gidiş" seçilirse, sadece gidiş tarihi seçeneği görüntülenir.

# SearchFlight: Bu Bileşen, Bu bileşen, kullanıcının başlangıç ve varış noktalarını seçerek uçuşları aramasını sağlar. Ardından, arama sonuçlarını tablo şeklinde görüntülemektedir.





