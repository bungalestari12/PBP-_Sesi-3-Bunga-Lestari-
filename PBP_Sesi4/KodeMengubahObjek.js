let studentData = {
    name :"Bunga Lestari",
    java_programing_score : 80,
    python_programing_score : 100,
    javascript_programing_score : 80,
    infoStudent : function(){
        return (
            "name : " + this.name + "\n" +
            "java_programing_score : " + this.java_programing_score + "\n" +
            "python_programing_score : " + this.python_programing_score + "\n" +
            "javascript_programing_score : " + this.javascript_programing_score 
        )
    }
}
studentData["name"] = "Sagitarius"
console.log(studentData.infoStudent());