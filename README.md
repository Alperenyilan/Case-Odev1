# Proje Hakkında Genel Bilgiler
<br/>
<h1>Kodlar Hakkında</h1>

# BodyComponent: Body Component bileşeni, kullanıcıya uçuş arama ve sonuçlarını görüntülemesini sağlayan bir arayüz sağlar. HeaderTop başlığı ise, şehir seçim inputları, arama butonu uçuş sonuçları ve tüm uçuşların listelendiği bir bileşen içerir.

# BodyTicket: Bu Component, Verilerin state değişkenleri ve işlevler aracılığıyla yönetildiği bölümdür. Seyehat Türü, Sınıf ve fiyat detayları girilir.

# FlightData:Bu Component, Verilerin alınıp başka componentlere aktarıldığı yerdir.

# FlightList:Bu Component, her bir uçuşun detaylarını ve bir butonu içeren bir liste öğesi oluşturmayı sağlar.

# HeaderTop:Bu Component, sayfanın üst kısmında yer alan başlık, logo ve menüyü oluşturmamızı sağlar.

# Home : Bu bileşen, HeaderTop ve BodyComponentinin çağrıldığı bileşendir.Sayfada kullanılması için bu bileşende çağırıp topladığım componenttir.

# NewDropDown: Bu Bileşen, Ant Design Select bileşenini kullanarak bir şehir seçim kutusu oluşturdum. props olarak gelen selected işlevini, bir seçenek seçildiğinde tetiklenir ve bu işlevi prop olarak geçen bileşenlerde kullanıldı.

# Pop Up: Bu bileşen,bir rezervasyon butonu oluşturur ve tıklanıldığında bir modal penceresi açar. Modal içerisinde BookTicket bileşeni yer alır, bu bileşen rezervasyon formunu içerir. "Tamam" düğmesine tıklandığında rezervasyon tamamlanır ve modal kapatılır. Bu bileşeni oluşturma sebebim ise, projenin gerçek hayat projesi olması ve Amadeus firmasının değerlerinde olan mükemmelliyetçilik anlayışına uygun olması için yapma gereksinimi kendi içimde duydum. Extradan böyle bir özellik getirmek istedim proje için.

# RadioBtn: Bu Bileşen, Kullanıcıya "Gidiş" veya "Gidiş-Dönüş" seyahat türü seçenekleri sunar. Eğer "Gidiş-Dönüş" seçilirse, hem gidiş hem de dönüş tarihi seçenekleri görüntülenir. Eğer sadece "Gidiş" seçilirse, sadece gidiş tarihi seçeneği görüntülenir.

# SearchFlight: Bu Bileşen, Bu bileşen, kullanıcının başlangıç ve varış noktalarını seçerek uçuşları aramasını sağlar. Ardından, arama sonuçlarını tablo şeklinde görüntülemektedir.

# ScreenShots:

# Aşağıdaki resimde projenin genel yapısı mevcuttur. Sol alt kısımda ise listelenen ürünlerin kaç adet olduğunu göstermektedir.
![genelekran görüntüsü](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/82eae079-6cfe-477b-887d-cc14d6901980)

# Aşağıdaki resimde tıklanıldıgında şehirlerin listelenmesi görüntülenmektedir.
![şehirler listeleme](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/09ac5083-5496-46be-ba52-aa1ec13ab63f)

# Aşağıdaki resimde gidiş-dönüş tıklandıgında dönüş günü görüntülenmektedir.
![gidiş dönüş](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/8b30fb0a-7ed5-41f6-8cd3-2c28cc3c7d6c)

# Aşağıdaki resimde tek yön için rezervasyon bölümü görüntülenmektedir.Rezervasyon için tıklanılan üründe hangi firma ise o firmanın adı yazar en üstte.
![Tek Yön Rezervasyon](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/dc4225d5-c9ea-428f-b793-5e39ffc50dc5)

# Aşağıdaki resimde gidiş-dönüş için rezervasyon bölümü görüntülenmektedir. Gidiş-Dönüş kısmına tıklandıgında ayrı bir dönüş için date görüntülenir.
![Gidiş dönüş rezervasyon](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/19591e97-7ab4-4aaa-849a-b141d1abf104)

# Aşağıdaki resimde iptal et tıklandıgında sayfa kapanır. Ücretler örnek için olusturulmustur.
![Alt kısım rezervasyon](https://github.com/Alperenyilan/Case-Odev1/assets/49797242/9bca34c0-f97f-45b3-b158-b4a8b14db70a)

# Proje Ayağa Kaldırmak için: 

1.) Projeyi indirin veya git clone (linki kopyalayın) <br/>
2.) Npm install <br/>
3) Npm Start

# Tech Stack 
React,Antd,Ant Design

# Özet

Projede seçilen şehirlerin aratılıp listelendikten sonra bu listelenen ürünlerin sayısını tutan bir yapı oluşturdum sol alt kısımda. Daha sonra ise listenen ürünlerin rezervasyon işlemini yapmasını sağlamak için ayrı bir bileşen oluşturdum. Bunun içinde de hem tek hem gidiş-dönüş için iki ayrı yapı kullandım. Bana verilen caseden daha fazlasını yapmayı ve daha farklı bir bakış açısıyla yaklaşıp gerçek zamanlı bir projeye dönüştürmeyi amaçladım. Amadeus şirketinin değerlerinde olan mükemmelliyetçi ve sorumluluk alma vizyonunu en iyi şekilde yansıtmak için elimden geleni yapmayı amaçladım. 





