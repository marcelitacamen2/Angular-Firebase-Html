import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-empleados',
  templateUrl: '../list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css'],
})
export class ListEmpleadosComponent implements OnInit {
  datosEmpleados: Observable<any[]>;

  constructor (firestore : AngularFirestore){
    this.datosEmpleados = firestore.collection('empleados').valueChanges();
  }

  ngOnInit(): void{

  }
}
