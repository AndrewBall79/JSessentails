

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function (){
        return ++this.views;
    }
}

var courses = [
    new Course("JET", "Not Me", 1, true, 1),
    new Course("URw/ECA", "Also Not Me", 1, true, 1)
]

console.log(courses[0]);

