class UserController{
    constructor(formIdCreate, formIdUpdate, tableId) {
        this.formEl = document.querySelector(formIdCreate);
        this.formUpdateEl = document.querySelector(formIdUpdate);
        this.tableEl = document.querySelector(tableId);
        this.boxCreate = document.querySelector("#box-user-create");
        this.boxUpdate = document.querySelector("#box-user-update");
        this.onSubmit();
        this.onEdit();
        this.selectAll();
    }

    onEdit(){
        document.querySelector("#box-user-update .btn-cancel").addEventListener("click", e=>{
            this.showPanelCreate();
        });
        this.formUpdateEl.addEventListener("submit", event =>{
            event.preventDefault();
            const btn = this.formUpdateEl.querySelector("[type=submit]");
            btn.disabled = true;
            const values = this.getValues(this.formUpdateEl);
            if (!values){
                btn.disabled = false;
                return;
            } 
            const index = this.formUpdateEl.dataset.trIndex;
            const tr = this.tableEl.rows[index];
            const userOld = JSON.parse(tr.dataset.user);
            const result = {...userOld, ...values};
            this.getPhoto(this.formUpdateEl).then((content) =>{
                result._photo = (!values.photo)? userOld._photo : content;
                const user = new User();
                user.loadFromJSON(result);
                user.save();
                this.getTr(user, tr);
                this.updateCount();
                this.formUpdateEl.reset();
                btn.disabled = false;
                this.showPanelCreate();
            }, (e) =>{
                console.error(e);
                btn.disabled = false;
                alert("Erro ao editar usuário.");
            });
        });
    }

    onSubmit(){
        this.formEl.addEventListener("submit", event => {
            event.preventDefault();
            const btn = this.formEl.querySelector("[type=submit]");
            btn.disabled = true;
            const values = this.getValues(this.formEl);
            if (!values){
                btn.disabled = false;
                return;
            } 
            this.getPhoto(this.formEl).then((content) =>{
                values.photo = content;
                values.save();
                this.addLine(values);
                this.formEl.reset();
                btn.disabled = false;
            }, (e) =>{
                console.error(e);
            });
        });
    }

    getPhoto(formEl){
        return new Promise((resolve, reject)=>{
            const fileReader = new FileReader();
            const file = formEl.querySelector('[name="photo"]')?.files[0];
            fileReader.onload = () => {resolve(fileReader.result);}
            fileReader.onerror = (e) => {reject(e);}
            (file) ? fileReader.readAsDataURL(file): resolve('dist/img/boxed-bg.jpg'); 
        });
    }

    getValues(formEl){
        const user = {};
        let isValid = true;
        [...formEl.elements].forEach((field, index) => {
            if(['name', 'email', 'password'].includes(field.name) && !field.value){
                field.parentElement.classList.add('has-error');
                isValid = false;
            }
            if(field.name ==="gender"){
                if (field.checked) user.gender = field.value;
            } else if(field.name === "admin"){
                user[field.name] = field.checked;
            } else {
                user[field.name] = field.value;
            }
        });
        if (!isValid) return false;
        return new User(user.name, user.gender, user.birth, user.country, user.email, user.password, user.photo, user.admin);
    }

    selectAll(){
        const users = User.getUsersStorage();
        users.forEach(dataUser=>{
            const user = new User();
            user.loadFromJSON(dataUser);
            this.addLine(user);
        })
    }

    addLine(dataUser){
        const tr = this.getTr(dataUser);
        this.tableEl.appendChild(tr);
        this.updateCount();
    }

    getTr(dataUser, tr = null){
        if (tr === null) tr = document.createElement('tr');
        tr.dataset.user = JSON.stringify(dataUser);
        tr.innerHTML = `
            <td><img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${(dataUser.admin)? 'Sim' : 'Não'}</td>
            <td>${Utils.dateFormat(dataUser.register)}</td>
            <td>
                <button type="button" class="btn btn-primary btn-edit btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-delete btn-xs btn-flat">Excluir</button>
            </td>
        `;
        this.addEventsTr(tr);
        return tr;
    }

    addEventsTr(tr){
        tr.querySelector(".btn-delete").addEventListener("click", e=>{
            if(confirm("Deseja realmente excluir?")) {
                const user = new User();
                user.loadFromJSON(JSON.parse(tr.dataset.user));
                user.remove();
                tr.remove();
                this.updateCount();
            }
        });
        tr.querySelector(".btn-edit").addEventListener("click", e=>{
            const json = JSON.parse(tr.dataset.user);
            this.formUpdateEl.dataset.trIndex = tr.sectionRowIndex;
            for (let name in json){
                let field = this.formUpdateEl.querySelector((`[name=${name.replace("_", "")}]`));
                if(field){
                    switch(field.type){
                        case 'file':
                            continue;

                        case 'radio':
                            field = this.formUpdateEl.querySelector(`[name=${name.replace("_", "")}][value="${json[name]}"]`);
                            field.checked = true;
                            break;

                        case 'checkbox':
                            field.checked = json[name];
                            break;

                        default:
                            field.value = json[name];
                    }
                } 
            }  
            this.formUpdateEl.querySelector(".photo").src = json._photo;
            this.showPanelUpdate();
        });
    }

    showPanelCreate(){
        this.boxUpdate.style.display = "none";
        this.boxCreate.style.display = "block";
    }

    showPanelUpdate(){
        this.boxCreate.style.display = "none";
        this.boxUpdate.style.display = "block";
    }

    updateCount(){
        let numberUsers = 0;
        let numberAdmin = 0;
        [...this.tableEl.children].forEach(tr=>{
            numberUsers++;
            const user = JSON.parse(tr.dataset.user);
            if (user._admin) numberAdmin++;
        });
        document.querySelector("#number-users").innerHTML = numberUsers;
        document.querySelector("#number-users-admin").innerHTML = numberAdmin;
    }
}
