let studentData = {
    name :"Bunga Lestari",
    java_programing_score : 80,
    python_programing_score : 100,
    javascript_programing_score : 80,
    infoStudent : function(){
        return (
            "name : " + this.name + "\n" +
            "id_number : " + this.id_number + "\n" +
            "java_programing_score : " + this.java_programing_score + "\n" +
            "python_programing_score : " + this.python_programing_score + "\n" +
            "javascript_programing_score : " + this.javascript_programing_score 
        )
    }
}
studentData["id_number"] = "121205"
console.log(studentData.infoStudent());