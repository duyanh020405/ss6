var products = [
    {
    id : "00",
    name : "PR1",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 100000,
    inf : "Chó pug thường rất thân thiện, dễ thương và hòa đồng với con người. Họ thích được chơi đùa và làm bạn với mọi người, đặc biệt là trẻ em. Tính cách năng động và vui vẻ của chúng khiến cho chúng trở thành một lựa chọn phổ biến cho gia đình và những người sống một mình."
    },
    {
    id : "001",
    name : "Chihuahua",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money :200000,
    inf :"Ngoài vẻ đẹp và tính cách tuyệt vời, Poodle còn được biết đến với khả năng thích ứng tốt với môi trường sống khác nhau. Họ thường rất thân thiện với con người và có thể tạo nên mối quan hệ mạnh mẽ với gia đình chúng."
    },
    {
    id : "002",
    name : "Pomeranian",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 300000,
    inf : "Chó Pekingese là một giống chó cảnh có vẻ ngoài rất độc đáo và đặc biệt. Chúng có bộ lông dày, dài và xoăn, tạo cho hình dáng của chúng một vẻ ngoài hoàn toàn khác biệt. Đặc điểm đặc trưng khác của Pekingese là mặt mũi phẳng, mắt lồi và đuôi quấn trên lưng."
    },
    {
    id : "003",    
    name : "Shih Tzu",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 400000,
    inf :"Dachshunds thường là chó rất trung thành và có tính cách dũng cảm. Họ được biết đến với lòng gan dạ và khả năng săn mồi tốt. Mặc dù thường nhỏ bé, nhưng chúng có thể là chó bảo vệ tốt và thích hợp cho gia đình nhỏ hoặc người sống một mình."
    },
    {
    id : "004",
    name : "Pug",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 500000,
    inf : "Giống chó này là kết quả của việc lai giữa chó và sói. Chúng có ngoại hình mạnh mẽ, hình dáng giống sói hơn là chó, và thường rất trung thành với gia đình nhưng cũng có thể cần được đào tạo cẩn thận"
    },
    {
    id : "005",
    name : "Maltese",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 600000,
    inf : "Đây là một giống chó lai giữa sói và chó Đức Đồng cỏ. Chúng được nuôi để phục vụ mục đích quân sự và bảo mật, với tính cách mạnh mẽ và đòi hỏi nhiều sự chăm sóc và huấn luyện."
    },
    {
    id : "006",
    name : "French Bulldog",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 700000,
    inf : "Husky thường có lớp lông dày đặc, đặc trưng với màu trắng và xám, nhưng cũng có thể có nhiều màu sắc khác nhau. Chúng có mắt xanh, xám hoặc ngân, và đặc điểm đặc trưng khác là đuôi gai vểnh lên và bộ lông dày phủ trên mặt."
    },
    {
    id : "007",    
    name : "Cavalier King Charles Spaniel",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 800000,
    inf : "Beagle thường có đôi tai dài và mũi nhọn. Chúng là giống chó săn mồi nên có bản năng săn mồi mạnh mẽ và thích mò mẫm, khám phá môi trường xung quanh. Tuy nhiên, Beagle cũng thân thiện, vui vẻ và thích hợp cho cả gia đình và người sống một mình."
    },
    {
    id : "008",    
    name : "Papillon",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 900000,
    inf : "Với tính cách hòa nhã và hòa đồng, Beagle thường là chó bạn đồng hành tốt và thích hợp cho việc nuôi trong môi trường thành phố hoặc nông thôn. Tuy nhiên, do tính cách tò mò và năng động, việc cung cấp đủ hoạt động vận động hàng ngày là rất quan trọng để giữ cho Beagle khỏe mạnh và hạnh phúc."
    },
    {id : "009",
    name : "Japanese Chin",
    weight : "2kg",
    from :"hn",
    age : 2,
    sex : "boy",
    money : 980000,
    inf : "Chó pug thường rất thân thiện, dễ thương và hòa đồng với con người. Họ thích được chơi đùa và làm bạn với mọi người, đặc biệt là trẻ em. Tính cách năng động và vui vẻ của chúng khiến cho chúng trở thành một lựa chọn phổ biến cho gia đình và những người sống một mình."
    },

    
    ]
    function find() {
        var find = document.getElementById('find').value;
        var result = ""; 
    
        for (let i = 0; i < products.length; i++) {
            if (find === products[i].name|| find === products[i].id) {
                result += "name: " + products[i].name + " , " + "<br>"+
                          "id: " + products[i].id + " , " +"<br>"+ 
                          "weight: " + products[i].weight + " , " + "<br>"+
                          "sex: " + products[i].sex + "<br>"+
                          "gioi thieu: " + products[i].inf ;


            }
        }
        document.getElementById('show').innerHTML = result;
    }

    let newlist = [];
        function buy(index){
            if(confirm("ban co chac chan voi viec nuoi no khong ?")){
            if(localStorage.getItem(products[index].id) !== null){
                alert(`con vật với id : ${products[index].id} đã được đặt nuôi với giá  ${products[index].money} , vui lòng chọn con vật khác `)
        
            }
            else{
                alert(`con vật với số id ${products[index].id} được đặt nuôi bởi bạn với giá  ${products[index].money} thành công`)
                localStorage.setItem(products[index].name,products[index].id)
            }}
            else[
                confirm("CAM ON BAN DA XAC NHAN !")
            ]
    }
     