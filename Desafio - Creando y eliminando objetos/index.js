function Consultorio(nombre,pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

// Función constructora para Paciente
function Paciente(nombre,edad,rut,diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

// Métodos Object.defineProperty()
    Object.defineProperty(this,'_getNombre',{
        get: function(){
            return _nombre;
        }
    });
    Object.defineProperty(this,'_setNombre',{
        set: function(nombre){
            _nombre = nombre;
        }
    });


    Object.defineProperty(this,'_getEdad',{
        get: function(){
            return _edad;
        }
    });
    Object.defineProperty(this,'_setEdad',{
        set: function(edad){
            _edad = edad;
        }
    });


    Object.defineProperty(this,'_getRut',{
        get: function(){
            return _rut;
        }
    });
    Object.defineProperty(this,'_setRut',{
        set: function(rut){
            _rut = rut;
        }
    });


    Object.defineProperty(this,'_getDiagnostico',{
        get: function(){
            return _diagnostico;
        }
    });
    Object.defineProperty(this,'_setDiagnostico',{
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
}

// Getters y Setters
Paciente.prototype.getNombre = function(){
    return this._getNombre;
}
Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
}

Paciente.prototype.getEdad = function(){
    return this._getEdad;
}
Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
}

Paciente.prototype.getRut = function(){
    return this._getRut;
}
Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
}

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
}
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
}

// Mostrar todos los pacientes y sus datos
Consultorio.prototype.mostrarPacientes = function(){
    console.log('Todos los pacientes del consultorio:');

    for(var i=0; i < this.pacientes.length; i++){
        console.log('Nombre: ' + this.pacientes[i].getNombre() + ' - ' + 'Edad: ' + this.pacientes[i].getEdad() + ' - ' + 'Rut: ' + this.pacientes[i].getRut() + ' - ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
    }
}

// Buscar los datos de los pacientes por nombre
Consultorio.prototype.buscarDatosPorNombre = function(nombre){

    for(var i=0; i < this.pacientes.length; i++){
        if(nombre == this.pacientes[i].getNombre()){
            console.log('Buscar datos del paciente por nombre: ' + this.pacientes[i].getNombre());
            console.log('Nombre: ' + this.pacientes[i].getNombre() + ' - ' + 'Edad: ' + this.pacientes[i].getEdad() + ' - ' + 'Rut: ' + this.pacientes[i].getRut() + ' - ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
        }
    }
    
}

// Instanciar cada objeto
var p1 = new Paciente('María Vega',23,'16.489.217-5','resfrio');
var p2 = new Paciente('Carlos David',67,'23.624.948-4','soriasis');
var p3 = new Paciente('Pamela García',32,'12.216.248-7','reumetismo');
var c1 = new Consultorio('Consultorio Médico Santiago',[p1,p2,p3]);

c1.mostrarPacientes();