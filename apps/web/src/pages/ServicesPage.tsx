import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarCheck, Wrench } from "lucide-react";
import { useForm } from "react-hook-form";
import { AppointmentSchema, type AppointmentInput } from "@skyline/shared";
import { services } from "../data/catalog";

export function ServicesPage() {
  const { register, handleSubmit, formState } = useForm<AppointmentInput>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: { serviceId: "Computer Repair" }
  });

  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-secondary">IT Services</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Book certified technicians for repairs, upgrades, installations, cybersecurity, cloud migration, and business IT support.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Wrench className="mb-4 text-primary" />
                <h2 className="font-heading text-lg font-bold text-secondary">{service}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Diagnosis, quote, secure handling, appointment tracking, and warranty records.</p>
              </article>
            ))}
          </div>
          <form
            onSubmit={handleSubmit(() => undefined)}
            className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-skyline"
          >
            <div className="mb-5 flex items-center gap-2 font-heading text-xl font-bold text-secondary">
              <CalendarCheck className="text-primary" /> Book Appointment
            </div>
            <div className="grid gap-3">
              <select {...register("serviceId")} className="rounded-md border border-slate-200 px-3 py-3">
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
              <input {...register("name")} className="rounded-md border border-slate-200 px-3 py-3" placeholder="Full name" />
              <input {...register("email")} className="rounded-md border border-slate-200 px-3 py-3" placeholder="Email" />
              <input {...register("phone")} className="rounded-md border border-slate-200 px-3 py-3" placeholder="Phone" />
              <input {...register("preferredDate")} type="date" className="rounded-md border border-slate-200 px-3 py-3" />
              <textarea {...register("notes")} className="min-h-28 rounded-md border border-slate-200 px-3 py-3" placeholder="Device, issue, location, urgency" />
            </div>
            {Object.keys(formState.errors).length > 0 && <p className="mt-3 text-sm font-semibold text-danger">Please complete the required appointment fields.</p>}
            <button className="mt-4 w-full rounded-md bg-primary px-4 py-3 font-bold text-white">Request Booking</button>
          </form>
        </div>
      </section>
    </main>
  );
}
