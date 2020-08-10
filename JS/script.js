window.onresize = function () { NavButtonSize() };
function NavButtonSize() {
    if (document.documentElement.clientWidth < 1100) {
        document.getElementById("SignInBtn").classList.remove("pl-3", "pr-3", "p-2");
        document.getElementById("LogInBtn").classList.remove("pl-3", "pr-3", "p-2");
        document.getElementById("EnrollBtn").classList.remove("pl-4", "pr-4", "p-2");
    } else if (document.documentElement.clientWidth > 1100) {
        document.getElementById("SignInBtn").classList.add("pl-3", "pr-3", "p-2");
        document.getElementById("LogInBtn").classList.add("pl-3", "pr-3", "p-2");
        document.getElementById("EnrollBtn").classList.add("pl-4", "pr-4", "p-2");
    } else if (document.documentElement.clientWidth < 768){
        document.getElementById("SignInBtn").style.margin = 100;
    }
}