import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ICategory } from "../types/category.interface";
import { ITransaction, ITransactionData } from "../types/transaction.interface";
import { CategoryService } from "./category.service";
import { tap } from "rxjs";


@Injectable({
  providedIn: 'root',
})

export class TransActionService {
  transactionSig = signal<ITransaction[]>([])
  constructor(private readonly http: HttpClient, private readonly toastr: ToastrService, private categoryService: CategoryService) {}


  findAll() {
    return this.http.get<ITransaction[]>('transactions').subscribe((res) => this.transactionSig.set(res))
  }

  create(data: ITransactionData) {
    return this.http.post<ITransaction>('transactions', data)
    .pipe(tap((newTransaction) => {
      const category = this.categoryService.categoriesSig()
      .find((ctg) => ctg.id === newTransaction.category?.id)

      this.transactionSig.update((transactions) => [
        {...newTransaction, category},
        ...transactions,
      ])
    }))
    .subscribe(() => this.toastr.success('created'))
  }

  delete(id: number) {
    this.http.delete(`transactions/transaction/${id}`).subscribe(() => {
      this.transactionSig.update((transactions) => transactions.filter((transaction) => transaction.id != id))
      this.toastr.warning('deleted');
    })
  }
}