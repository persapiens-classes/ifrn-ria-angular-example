import { Injectable } from "@angular/core"
import { Owner } from "./owner"

@Injectable({
    providedIn: 'root'
  })
export class OwnerService {

    private beans = new Array<Owner>

    createBean(): Owner{
        return new Owner("")
    }
        
    insert(bean: Owner): Owner {
        this.beans.push(bean)

        return bean
    }

    remove(id: string): void {
        let index = this.beans.findIndex(localBean => localBean.name === id)

        let result = index > -1
        if (result) {
            this.beans.splice(index, 1)[0]
        }
    }

    update(id: string, bean: Owner): Owner {
        let index = this.beans.findIndex(bean => bean.name === id)

        let result = index > -1
        if (result) {
            this.beans[index] = bean
        }

        return bean
    }

    findAll(): Array<Owner> {
        return this.beans
    }

    findById(id: string): Owner {
        let index = this.beans.findIndex(bean => bean.name === id)

        let result = this.createBean()
        if (index > -1) {
            result = this.beans[index]
        }

        return result
    }
}
  