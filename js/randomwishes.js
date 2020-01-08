var RandomWishes = new Array();

RandomWishes[0] = "Tìm Tòi học tập";

RandomWishes[1] = "Không bỏ cuộc";

RandomWishes[2] = "Không chán nản";

RandomWishes[3] = "Luôn theo đuổi đam mê";

RandomWishes[4] = "Lưu ý có rất nhiều người đang giúp đỡ bạn";

RandomWishes[5] = "Tự đứng lên khi bị ngã";

RandomWishes[6] = "lấy cách nhược điểm làm cái ưu điểm";

RandomWishes[7] = "Hiểu được mình đang làm gì và sẽ đến đâu";

RandomWishes[8] = "Hay suy nghĩ 7 lần khi làm 1 việc gì đó";

RandomWishes[9] = "Hiểu được mình đang làm gì và sẽ đến đâu";

RandomWishes[10] = "Tự đứng lên khi bị ngã";

RandomWishes[11] = "lấy cách nhược điểm làm cái ưu điểm";

RandomWishes[12] = "Không chán nản";

RandomWishes[13] = "Không bỏ cuộc";

RandomWishes[14] = "Tự đứng lên khi bị ngã";

RandomWishes[15] = "Nếu không có ai giúp bạn thì hãy đút tay vào túi quần và đi tiếp trên con đường";

RandomWishes[16] = "(Nếu bạn đọc được câu này thì bạn là người may mắn nhất vì chỉ có 1/100 người mới đọc được câu này không tin bạn thử reset trang :3)";
var myRandom = Math.floor(Math.random()*RandomWishes.length);

document.getElementById('RandomWishes').innerHTML= RandomWishes[myRandom];
