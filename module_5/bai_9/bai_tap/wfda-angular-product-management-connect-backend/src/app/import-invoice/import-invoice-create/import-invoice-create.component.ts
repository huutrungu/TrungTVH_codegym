import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Supplier} from '../../model/pharmarcy/supplier';
import {Medicine} from '../../model/pharmarcy/medicine';
import {ImportInvoiceMedicine} from '../../model/pharmarcy/import-invoice-medicine';
import {Employee} from '../../model/pharmarcy/employee';
import {ImportInvoiceService} from '../import-invoice.service';


@Component({
  selector: 'app-import-invoice-create',
  templateUrl: './import-invoice-create.component.html',
  styleUrls: ['./import-invoice-create.component.css']
})
export class ImportInvoiceCreateComponent implements OnInit {
  createImportInvoiceForm: FormGroup;
  suppliers: Supplier[];
  selectedSupplier: Supplier;
  public now: Date = new Date();
  medicines: Medicine[];
  medicineList: Medicine[] = [];
  importInvoiceMedicineList: ImportInvoiceMedicine[];
  flagNoMedicine = true;
  isShowMedicineList = false;
  medicineCurrent: ImportInvoiceMedicine;
  intoMoney = 0;
  totalMoney = 0;
  prePayment = 0;
  remainMoney = 0;
  employees: Employee[];
  defaultEmployee: Employee;
  medicineSelected: Medicine;
  importInvoiceMedicineSelectedArray: FormArray;
  successMessage = false;
  cartEmpty = false;
  equal(item1, item2) {
    return item1 && item2 && item1.supplierId === item2.supplierId;
  }

  constructor(private fb: FormBuilder,
              private ref: ChangeDetectorRef,
              private importInvoiceService: ImportInvoiceService) {
    importInvoiceService.getSupplierList().subscribe(suppliers => {
      this.importInvoiceService.getMedicineList().subscribe(medicines => {
        this.medicines = medicines;
        this.suppliers = suppliers;
        this.selectedSupplier = this.suppliers[0];
        importInvoiceService.getEmployee().subscribe(employees => {
          this.employees = employees;
          this.defaultEmployee = this.employees[0];
          console.log(this.defaultEmployee);
          this.createImportInvoiceForm = this.fb.group({
            importInvoiceId: 'HDN-XXXXX',
            importSystemCode: '',
            paymentPrepayment: '',
            total: '',
            importInvoiceDate: (this.now.getFullYear().toString() + '/' + '0' + (this.now.getMonth() + 1).toString().slice(-2)
              + '/' + '0' + this.now.getDate().toString().slice(-2)),
            importInvoiceHour: (this.now.toTimeString().slice(0, 8)),
            supplier: (this.suppliers[0]),
            employee: this.defaultEmployee,
            flag: true,
            importInvoiceMedicineList: this.fb.array(this.medicineList
              .map(importInvoiceMedicine => this.addNewImportInvoiceMedicine(importInvoiceMedicine))),
          });
        });
      });
    });
  }

  updateTotal() {
    const ctrl = this.createImportInvoiceForm.controls.importInvoiceMedicineList as FormArray;
    console.log(ctrl.controls);
    this.totalMoney = 0;
    ctrl.controls.forEach(x => {
      const parsed = parseFloat((x.get('intoMoney').value));
      this.totalMoney += parsed;
      this.ref.detectChanges();
    });
    this.updateRemain();
  }

  get importInvoiceMedicineListSelected(): FormArray {
    this.importInvoiceMedicineSelectedArray = this.createImportInvoiceForm.get('importInvoiceMedicineList') as FormArray;
    return this.importInvoiceMedicineSelectedArray;
  }
  checkNoMedicine() {
    if (this.importInvoiceMedicineSelectedArray.length === 0) {
      this.flagNoMedicine = true;
      return true;
    } else {
      this.flagNoMedicine = false;
      return false;
    }
  }

  ngOnInit() {
    this.checkNoMedicine();
  }

  createNewImportInvoice() {
    if (this.checkNoMedicine()) {
      this.cartEmpty = true;
    } else {
      this.importInvoiceService.save(this.createImportInvoiceForm.value).subscribe(() =>
        console.log('saved'));
      this.successMessage = !this.successMessage;
      this.createImportInvoiceForm.reset();
      this.importInvoiceMedicineSelectedArray.controls.forEach(x => {
          let count = 1;
          this.importInvoiceMedicineSelectedArray.removeAt(count);
          count++;
        }
      );
      this.checkNoMedicine();
    }
  }

  // create by TrungTVH 2/7/2022: -> listen change from supplier selected
  onChange($event) {
    console.log($event);
    this.selectedSupplier = $event;
  }

  chooseMedicine() {
    this.isShowMedicineList = !this.isShowMedicineList;
  }

  importMedicine(importInvoiceMedicine: ImportInvoiceMedicine) {
    this.isShowMedicineList = !this.isShowMedicineList;
    this.medicineCurrent = importInvoiceMedicine;
    const importInvoiceMedicineForm = this.addNewImportInvoiceMedicine(this.medicineCurrent);
    this.importInvoiceMedicineListSelected.push(importInvoiceMedicineForm);
    this.checkNoMedicine();
    this.cartEmpty = false;
  }

  addNewImportInvoiceMedicine(importInvoiceMedicine: ImportInvoiceMedicine) {
    return this.fb.group({
      importInvoiceMedicineId: [importInvoiceMedicine.importInvoiceMedicineId],
      medicineUnit: [importInvoiceMedicine.medicineUnit.medicineUnitName],
      intoMoney: 0,
      medicine: this.medicineSelected,
      medicineName: this.medicineSelected.medicineName,
      importInvoiceMedicineImportPrice: [this.medicineCurrent.medicineImportPrice],
      importInvoiceMedicineImportAmount: 1,
      importInvoiceMedicineDiscountRate: 0,
      importInvoiceMedicineExpiry: '',
      importInvoiceMedicineVat: 0,
      importInvoiceMedicineLotNumber: '',
      flag: true
    });
  }

  updateRemain() {
    this.remainMoney = this.totalMoney - this.prePayment;
  }

  sendMedicine(medicine: Medicine) {
    this.medicineSelected = medicine;
  }

  sendMedicineToDelete(i: number) {
    this.importInvoiceMedicineSelectedArray.removeAt(i);
    this.updateTotal();
    this.checkNoMedicine();
  }
}
