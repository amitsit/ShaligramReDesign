﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ShaligramConsultancyAPI.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class ShaligramConsultancyEntities : DbContext
    {
        public ShaligramConsultancyEntities()
            : base("name=ShaligramConsultancyEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<InquiryDetail> InquiryDetails { get; set; }
        public virtual DbSet<CityList> CityLists { get; set; }
        public virtual DbSet<ContactUsEnquiry> ContactUsEnquiries { get; set; }
    }
}
